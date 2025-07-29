import * as React from 'react';

import { cn } from '@/utils/ui.utils';

type Column = {
  key: string;
  label: string;
  sortable?: boolean;
};

type TableProps = {
  variant?: 'default' | 'compact';
  sortable?: boolean;
  columns: Column[];
  data: Record<string, React.ReactNode>[];
  toolbar?: React.ReactNode;
};

export const Table: React.FC<TableProps> = ({
  variant = 'default',
  sortable = false,
  columns,
  data,
  toolbar,
}) => {
  const cellPadding = variant === 'compact' ? 'px-2 py-2' : 'px-4 py-3';

  return (
    <div className="space-y-[17px]">
      {toolbar && (
        <div className="flex items-center justify-between">{toolbar}</div>
      )}

      <div className="w-full overflow-auto rounded-xl border bg-white text-sm">
        <table className="min-w-full table-auto">
          <thead className="text-left text-xs">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(cellPadding, 'whitespace-nowrap')}
                >
                  {col.label}
                  {sortable && col.sortable && (
                    <span className="ml-1 cursor-pointer">↑↓</span> // Replace with icons
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="rounded-lg border">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(cellPadding, 'whitespace-nowrap')}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
