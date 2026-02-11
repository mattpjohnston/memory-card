import Card from "../Card/Card";

export default function GameBoard({ cards = [], onCardClick }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          breed={card.breed}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
}
