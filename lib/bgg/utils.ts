import { z, ZodObject, ZodRawShape } from "zod";
import convert from "xml-js";

export const transformBggSchemaToArray = <T extends ZodRawShape>(
  schema: ZodObject<T>
) => {
  return z
    .union([schema.array(), schema])
    .optional()
    .transform((val) => {
      if (val) {
        if (Array.isArray(val)) return val;
        return [val];
      }
      return [];
    });
};

export const parseDataToJSON = (data: string) =>
  JSON.parse(
    convert.xml2json(data, {
      compact: true,
      spaces: 2,
    })
  );
