import { z } from "zod";
import { parseDataToJSON, transformBggSchemaToArray } from "./utils";
const boardgameSearchScheme = z.object({
  _attributes: z.object({
    objectid: z.string(),
  }),
  // name: z.object({
  //   _attributes: z
  //     .object({
  //       primary: z.string(),
  //     })
  //     .optional(),
  //   _text: z.string(),
  // }),
  // yearpublished: z
  //   .object({
  //     _text: z.string(),
  //   })
  //   .optional(),
});
const searchSchemaResponse = z
  .object({
    boardgames: z.object({
      _attributes: z.object({
        termsofuse: z.string(),
      }),
      boardgame: transformBggSchemaToArray(boardgameSearchScheme),
    }),
  })
  .transform((val) =>
    val.boardgames.boardgame.map((item) => ({
      id: item._attributes.objectid,
    }))
  );

export type SearchGamesResponse = z.infer<typeof searchSchemaResponse>;

export const getSearch = async (search: string) => {
  const data = await fetch(
    `https://boardgamegeek.com/xmlapi/search?+ ${new URLSearchParams({
      search,
    })}`
  ).then((res) => res.text());
  const parsed = searchSchemaResponse.parse(parseDataToJSON(data));
  return parsed;
};
