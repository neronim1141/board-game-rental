"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Form } from "./ui/form";

interface SearchInputProps {
  debounce?: number;
}
export const SearchInput = ({ debounce = 500 }: SearchInputProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("search") ?? undefined);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search !== undefined) router.push(`?search=${search}`);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div>
      <Input
        id="search"
        placeholder="Search BGG for games"
        value={search ?? ""}
        onChange={(e) => setSearch(e.target.value)}
        min={3}
      />
      {search && search.length < 3 ? (
        <span className="text-destructive text-sm">
          Minimum of 3 characters are needed
        </span>
      ) : null}
    </div>
  );
};
