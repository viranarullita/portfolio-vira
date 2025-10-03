import { training } from "../data";

export default function Training() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {training.map((item) => (
        <div
          key={item.id}
          className="rounded-xl shadow-md p-4 text-center bg-white"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold">{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
