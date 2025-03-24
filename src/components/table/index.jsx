import React from "react";
import { ScrollView } from "react-native";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableData,
  TableRow,
} from "@/components/gluestack/table";

export default function CustomTable({ data, columns, isPending }) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(columns, data);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={true}>
      <Table className="min-w-full border">
        {/* Table Header */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border p-2"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableData key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollView>
  );
}
