import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
interface Game {
  title: string;
  categories: string[];
  description: string;
  players: {
    from: number;
    to: number;
  };
  time: {
    from: number;
    to: number;
  };
}
export default function GameCard({ game }: { game: Game }) {
  const categories = ["Strategia", "Ekonomia", "Polityka"];
  return (
    <div className="bg-zinc-300 p-2 flex flex-col gap-2 rounded drop-shadow-sm text-sm max-w-[340px]">
      <div className="font-bold text-xl flex justify-between">
        <span>{game.title}</span>
        <Button size="sm">Wypożycz</Button>
      </div>
      <div className="flex gap-2">
        {categories.map((e) => (
          <Badge>{e}</Badge>
        ))}
      </div>
      <div>{game.description}</div>
      <div>
        Players: <span>{game.players.from + "-" + game.players.to}</span>
      </div>
      <div>
        Time: <span>{game.time.from + "-" + game.time.to + "h"}</span>
      </div>
    </div>
  );
}
