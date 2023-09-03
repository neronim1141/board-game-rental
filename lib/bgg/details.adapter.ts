import { z } from "zod";
import { parseDataToJSON, transformBggSchemaToArray } from "./utils";
import {
  objectIdAttributesSchema,
  textAttributeCoerceSchema,
  textAttributeSchema,
} from "./common.types";

const nameElementSchema = z.object({
  _attributes: z
    .object({
      sortindex: z.string(),
      primary: z.string().optional(),
    })
    .optional(),
  _text: z.string(),
});
const boardGameAccesorySchema = z.object({
  _attributes: objectIdAttributesSchema,
  _text: z.string(),
});
const resultSchema = z.object({
  _attributes: z.object({
    value: z.string(),
    numvotes: z.string(),
    level: z.string().optional(),
  }),
});
const resultsSchema = z.object({
  _attributes: z
    .object({
      numplayers: z.string(),
    })
    .optional(),
  result: transformBggSchemaToArray(resultSchema),
});

const pollSchema = z.object({
  _attributes: z.object({
    name: z.string(),
    title: z.string(),
    totalvotes: z.string(),
  }),
  results: transformBggSchemaToArray(resultsSchema),
});
const statisticSchema = z.object({
  _attributes: z.object({
    page: z.string(),
  }),
  ratings: z.object({
    usersrated: textAttributeCoerceSchema,
  }),
});
const boardgameDetailsSchema = z.object({
  _attributes: objectIdAttributesSchema,
  yearpublished: textAttributeCoerceSchema,
  minplayers: textAttributeCoerceSchema,
  maxplayers: textAttributeCoerceSchema,
  playingtime: textAttributeCoerceSchema,
  minplaytime: textAttributeCoerceSchema,
  maxplaytime: textAttributeCoerceSchema,
  age: textAttributeCoerceSchema,
  name: transformBggSchemaToArray(nameElementSchema),
  description: textAttributeSchema,
  thumbnail: textAttributeSchema.optional(),
  image: textAttributeSchema.optional(),
  // boardgamepublisher: boardGameAccesorySchemaUnionTransform,
  // boardgamefamily: boardGameAccesorySchemaUnionTransform,
  boardgamecategory: transformBggSchemaToArray(boardGameAccesorySchema),
  // boardgamedesigner: boardGameAccesorySchemaUnionTransform,
  // boardgameartist: boardGameAccesorySchemaUnionTransform,
  // boardgameexpansion: boardGameAccesorySchemaUnionTransform,
  // boardgamesubdomain: boardGameAccesorySchemaUnionTransform,
  // boardgameversion: boardGameAccesorySchemaUnionTransform,
  // boardgameaccessory: boardGameAccesorySchemaUnionTransform,
  // videogamebg: boardGameAccesorySchemaUnionTransform,
  poll: transformBggSchemaToArray(pollSchema),
  statistics: statisticSchema.optional(),
});

const detailsSchemaResponse = z
  .object({
    boardgames: z.object({
      // _attributes: z.object({
      //   termsofuse: z.string(),
      // }),
      boardgame: transformBggSchemaToArray(boardgameDetailsSchema),
    }),
  })
  .transform((val) =>
    val.boardgames.boardgame.map((item) => ({
      id: item._attributes.objectid,
      name: item.name.find((n) => n._attributes?.primary)?._text,
      alternativeNames: item.name
        .filter((n) => !n._attributes?.primary)
        .map((n) => n._text),
      description: item.description,
      categories: item.boardgamecategory.map((category) => ({
        id: category._attributes.objectid,
        text: category._text,
      })),
      players: {
        min: item.minplayers,
        max: item.maxplayers,
      },
      playTime: {
        min: item.minplaytime,
        max: item.maxplaytime,
        default: item.playingtime,
      },
      thumbnail: item.thumbnail,
      yearpublished: item.yearpublished,
      statistics: {
        ratings: item.statistics?.ratings.usersrated ?? 0,
      },
    }))
  );

export type DetailsResponse = z.infer<typeof detailsSchemaResponse>;

export const getDetails = async (ids: string[]) => {
  if (ids.find((s) => s === "")) throw new Error("cannot get empty id");
  const data = await fetch(
    `https://boardgamegeek.com/xmlapi/boardgame/${ids.join(",")}?stats=1`
  ).then((res) => res.text());
  const parsed = detailsSchemaResponse.parse(parseDataToJSON(data));
  return parsed;
};
