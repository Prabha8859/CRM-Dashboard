import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

export default function Table({ columns, data, actions, isDarkMode, onSort, sortConfig }) {
  return (
    <div className={`rounded-2xl border overflow-hidden shadow-sm ${isDarkMode ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-white'}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className={`uppercase font-semibold text-xs ${isDarkMode ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
            <tr>
              {columns.map((col) => (
                <th 
                  key={col.key} 
                  className={`px-6 py-4 whitespace-nowrap ${col.className || ''} ${col.sortable ? 'cursor-pointer hover:text-[#1bd488] transition-colors' : ''}`}
                  onClick={() => col.sortable && onSort && onSort(col.key)}
                >
                  <div className={`flex items-center gap-2 ${col.className?.includes('text-center') ? 'justify-center' : ''}`}>
                    {col.label}
                    {col.sortable && (
                      <span className="inline-block">
                        {sortConfig?.key === col.key ? (
                          sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                        ) : (
                          <ArrowUpDown size={14} className="opacity-50" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {actions && <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className={`transition-colors ${isDarkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50/80'}`}>
                  {columns.map((col) => (
                    <td key={col.key} className={`px-6 py-4 ${col.className || ''}`}>
                      {col.render ? col.render(row[col.key], row) : (
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{row[col.key]}</span>
                      )}
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
                <td colSpan={columns.length + (actions ? 1 : 0)} className={`px-6 py-8 text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
