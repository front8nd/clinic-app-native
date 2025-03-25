import React from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";
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

export default function CustomTable({ tableData, tableColumns, isPending }) {
  const table = useReactTable({
    columns: tableColumns,
    data: tableData || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Table className="min-w-full border border-gray-300">
        {/* Table Header */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border border-b-0 border-gray-400 bg-gray-100 p-2 text-sm font-bold text-center"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
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
          {isPending ? (
            <TableRow>
              <TableData
                colSpan={tableColumns.length}
                className="p-4 border border-gray-400"
              >
                <ActivityIndicator size="large" color="blue" />
              </TableData>
            </TableRow>
          ) : table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableData
                    key={cell.id}
                    className="border border-b-0 border-gray-400 p-2 text-sm text-center"
                  >
                    <Text numberOfLines={1} ellipsizeMode="tail">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Text>
                  </TableData>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableData
                colSpan={tableColumns.length}
                className="h-24 text-center border border-gray-400 px-2 py-1 bg-gray-50"
              >
                <Text className="flex justify-center">No Data Exists.</Text>
              </TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </ScrollView>
  );
}
