export default function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="text-2xl font-bold text-slate-700">{value}</h2>
    </div>
  );
}
