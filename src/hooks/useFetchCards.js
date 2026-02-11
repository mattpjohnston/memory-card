import { useEffect, useState } from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random/12";

export default function useFetchCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCards() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        const nextCards = data.message.map((imageUrl) => ({
          id: crypto.randomUUID(),
          imageUrl,
          breed: formatBreedFromUrl(imageUrl),
        }));
        if (!cancelled) setCards(nextCards);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadCards();

    return () => {
      cancelled = true;
    };
  }, []);

  return { cards, loading, error };
}

function formatBreedFromUrl(url) {
  const breed = url.split("/")[4].split("-").reverse();
  return breed
    .map((splitBreed) => splitBreed[0].toUpperCase() + splitBreed.slice(1))
    .join(" ");
}
