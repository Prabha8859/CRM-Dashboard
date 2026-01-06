export default function Table({ columns, data, actions }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-6 py-4 whitespace-nowrap">
                {col.label}
              </th>
            ))}
            {actions && <th className="px-6 py-4 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50/80 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-slate-700">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 text-right">
                    {actions(row)}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0)} className="px-6 py-8 text-center text-slate-400">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
