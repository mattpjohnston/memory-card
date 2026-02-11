import useFetchCards from "./hooks/useFetchCards";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import { useState } from "react";

export default function App() {
  const { cards: fetchedCards, loading, error } = useFetchCards();
  const [cards, setCards] = useState([]);
  const cardsToDisplay = cards.length > 0 ? cards : fetchedCards;

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);

  function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function handleCardClick(cardId) {
    if (clickedCardIds.includes(cardId)) {
      setHighScore(Math.max(highScore, currentScore));
      setCurrentScore(0);
      setClickedCardIds([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCardIds([...clickedCardIds, cardId]);
    }

    setCards((prev) => shuffle(prev.length ? prev : fetchedCards));
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4">
      <div className="mx-auto max-w-6xl space-y-6">
        <Header currentScore={currentScore} highScore={highScore} />
        {loading && (
          <p className="text-center text-lg text-slate-600">Loading pups...</p>
        )}
        {error && (
          <p className="text-center text-lg text-red-600">
            Error: {error.message}
          </p>
        )}
        <GameBoard cards={cardsToDisplay} onCardClick={handleCardClick} />
      </div>
    </main>
  );
}
