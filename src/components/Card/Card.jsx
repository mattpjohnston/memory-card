export default function Card({ imageUrl, breed, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full cursor-pointer flex-col items-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95"
    >
      <img
        src={imageUrl}
        alt={breed}
        className="h-60 w-full rounded-xl object-cover"
      />
      <p className="mt-2 text-sm font-medium text-slate-700">{breed}</p>
    </button>
  );
}
