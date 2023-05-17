import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import type { ColumnDef } from '@tanstack/react-table'

interface ReactTableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  table_name: string
}

const Table = <T extends object>({ data, columns, table_name }: ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-6 bg-white">
      <h3 className="mb-6 text-base font-semibold">{table_name}</h3>
      <table className="w-full">
        <thead className="text-dark-400 text-xs font-normal text-left border-b border-b-border">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="py-3 font-normal">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white border-b border-b-border text-dark-500 text-sm">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
