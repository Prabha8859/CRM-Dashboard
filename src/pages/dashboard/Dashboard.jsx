import Card from "../../ui/Card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <Card title="Total Users" value="120" />
        <Card title="Staff" value="15" />
        <Card title="Packages" value="8" />
        <Card title="Tests" value="32" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        <p className="text-sm text-slate-500">
          Yaha future me table / chart aayega
        </p>
      </div>
    </div>
  );
}
