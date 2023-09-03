import convert from "xml-js";
import { z } from "zod";

const partAttributeSchema = z.object({
  _attributes: z.object({
    value: z.string(),
  }),
});

const hotSchemaResponse = z
  .object({
    _declaration: z.object({
      _attributes: z.object({
        version: z.string(),
        encoding: z.string(),
      }),
    }),
    items: z.object({
      _attributes: z.object({
        termsofuse: z.string(),
      }),
      item: z
        .object({
          _attributes: z.object({
            id: z.string(),
            rank: z.string(),
          }),
          thumbnail: partAttributeSchema,
          name: partAttributeSchema,
          yearpublished: partAttributeSchema,
        })
        .array(),
    }),
  })
  .transform((val) =>
    val.items.item.map((item) => ({
      id: item._attributes.id,
      rank: item._attributes.rank,
      thumbnail: item.thumbnail._attributes.value,
      name: item.name._attributes.value,
      yearpublished: item.yearpublished._attributes.value,
    }))
  );

export type HotGamesResponse = z.infer<typeof hotSchemaResponse>;

export const getHot = async () => {
  const data = await fetch(
    "https://www.boardgamegeek.com/xmlapi2/hot?boardgame"
  ).then((res) => res.text());
  const parsed = hotSchemaResponse.parse(
    JSON.parse(
      convert.xml2json(data, {
        compact: true,
        spaces: 2,
      })
    )
  );
  return parsed;
};
