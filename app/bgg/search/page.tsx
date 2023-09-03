import { SearchInput } from "@/components/SearchInput";
import { BGGGameList } from "./BGGGameList";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function SearchBGG(props: {
  searchParams?: Record<string, string | undefined>;
}) {
  const searchQuery = props.searchParams?.search;

  return (
    <>
      <SearchInput />
      {!searchQuery || searchQuery.length < 3 ? (
        <>Start Searching</>
      ) : (
        // this is a fix for not triggering loading.tsx when changing searchparams
        <Suspense fallback={<>loading</>} key={searchQuery}>
          <BGGGameList search={searchQuery} />
        </Suspense>
      )}
    </>
  );
}
