import Button from "../../ui/Button";

export default function InsuranceList() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Insurance</h2>
        <Button>Add Insurance</Button>
      </div>

      <p className="text-sm text-slate-500">
        Insurance list yaha hogi
      </p>
    </div>
  );
}
