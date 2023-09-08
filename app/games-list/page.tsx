import Filter from "@/components/FilterGamesList";
import GameCard from "@/components/GameCard";

export default function GamesList() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 items-center py-4">
      <div className="w-[375px]">
        <Filter />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
