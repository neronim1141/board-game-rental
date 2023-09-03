import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function GameCard() {
  const categories = ["Strategia", "Ekonomia", "Polityka"];
  return (
    <div className="bg-zinc-300 p-2 flex flex-col gap-2 rounded drop-shadow-sm text-sm max-w-[340px]">
      <div className="font-bold text-xl flex justify-between">
        <span>Ryzyko</span>
        <Button size="sm">Wypożycz</Button>
      </div>
      <div className="flex gap-2">
        {categories.map((e) => (
          <Badge>{e}</Badge>
        ))}
      </div>
      <div>
        Gra w której trzeba podbić cały świat, walić na łeb enemysów i szukać
        sojuszy wśród innych graczy. Gra też ma zasady których nie znam, ale
        grałem zawsze po swojemu.
      </div>
      <div>
        Players: <span>1-5</span>
      </div>
      <div>
        Time: <span>0.5-2h</span>
      </div>
    </div>
  );
}
