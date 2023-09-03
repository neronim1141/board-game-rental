import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { searchWithDetails } from "@/lib/bgg/searchWithDetails";

interface BGGGameListProps {
  search: string;
}
export const BGGGameList = async ({ search }: BGGGameListProps) => {
  const games = await searchWithDetails(search);
  if (!games) return <>no games</>;

  return (
    <ul className="space-y-10">
      {games.map((game) => (
        <li key={game.id} className="w-full">
          <div className="flex gap-2 w-full">
            <div className="w-24 h-24 relative">
              {game.thumbnail && (
                <Image
                  src={game.thumbnail}
                  style={{ objectFit: "contain" }}
                  alt={game.name || "game Image"}
                  fill
                  sizes="33vw"
                  className="w-full h-auto"
                />
              )}
            </div>
            <div className="grid flex-grow w-full">
              <h1>{game.name}</h1>
              <div className="flex gap-2 flex-wrap">
                {game.categories.map((category) => (
                  <Badge key={category.id}>{category.text}</Badge>
                ))}
              </div>
              <div>
                playtime: {game.playTime.min} - {game.playTime.max}{" "}
                {game.playTime.default}
              </div>
              <div>
                players: {game.players.min} - {game.players.max}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
