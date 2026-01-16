import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange, isDarkMode }) => {
  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-between px-4 py-3 sm:px-6 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium ${
            isDarkMode
              ? 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
          } ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`relative ml-3 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium ${
            isDarkMode
              ? 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
          } ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
            Showing page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset focus:z-20 focus:outline-offset-0 ${
                isDarkMode
                  ? 'ring-slate-700 hover:bg-slate-800 text-slate-400'
                  : 'ring-slate-300 hover:bg-slate-50 text-slate-400'
              } ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => onPageChange(i + 1)}
                aria-current={currentPage === i + 1 ? 'page' : undefined}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ring-1 ring-inset ${
                  currentPage === i + 1
                    ? isDarkMode
                      ? 'z-10 bg-[#1bd488] text-[#055b65] ring-[#1bd488]'
                      : 'z-10 bg-[#055b65] text-white ring-[#055b65]'
                    : isDarkMode
                    ? 'text-slate-300 ring-slate-700 hover:bg-slate-800'
                    : 'text-slate-900 ring-slate-300 hover:bg-slate-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset focus:z-20 focus:outline-offset-0 ${
                isDarkMode
                  ? 'ring-slate-700 hover:bg-slate-800 text-slate-400'
                  : 'ring-slate-300 hover:bg-slate-50 text-slate-400'
              } ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;