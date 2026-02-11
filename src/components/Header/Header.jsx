import Scoreboard from "../Scoreboard/Scoreboard";

export default function Header({ currentScore, highScore }) {
  return (
    <header className="flex items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Memory Card</h1>
        <p className="mt-1 max-w-xl text-sm text-slate-600">
          Every card is a good boy. Click each pup once to increase your score,
          if you click the same one twice your score resets.
        </p>
      </div>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
    </header>
  );
}
