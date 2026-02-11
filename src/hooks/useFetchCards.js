import { useEffect, useState } from "react";

export default function useFetchCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://dog.ceo/api/breeds/image/random/12";

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const result = await fetch(url);
        if (!result.ok) throw new Error(`HTTP ${result.status}`);

        const data = await result.json();
        if (!cancelled) setCards(data);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { cards, loading, error };
}
