import { getDetails } from "./details.adapter";
import { getSearch } from "./search.adapter";

export const searchWithDetails = async (query: string) => {
  const search = await getSearch(query);
  return await getDetails(search.map((s) => s.id));
};
