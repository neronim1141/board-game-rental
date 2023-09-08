import Filter from "@/components/FilterGamesList";
import GameCard from "@/components/GameCard";
const game = {
  title: "Ryzyko",
  categories: ["Strategia", "Ekonomia", "Polityka"],
  description:
    " Gra w której trzeba podbić cały świat, walić na łeb enemysów i szukać sojuszy wśród innych graczy. Gra też ma zasady których nie znam, ale grałem zawsze po swojemu.",
  players: {
    from: 1,
    to: 5,
  },
  time: {
    from: 0.5,
    to: 2,
  },
};
export default function GamesList() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 items-center py-4">
      <div className="w-[375px]"></div>
      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
        {Array.from({ length: 10 }).map(() => (
          <GameCard game={game} />
        ))}
      </div>
    </div>
  );
}
