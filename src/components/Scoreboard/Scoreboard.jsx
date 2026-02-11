export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="flex flex-col items-end text-sm self-end">
      <p className="font-semibold">Score: {currentScore}</p>
      <p className="font-semibold">Best Score: {highScore}</p>
    </div>
  );
}
