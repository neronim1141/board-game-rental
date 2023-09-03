import { z } from "zod";

export const textAttributeSchema = z
  .object({
    _text: z.string(),
  })
  .transform((val) => val._text);
export const textAttributeCoerceSchema = z
  .object({
    _text: z.coerce.number(),
  })
  .transform((val) => val._text);
export const objectIdAttributesSchema = z.object({
  objectid: z.string(),
});
