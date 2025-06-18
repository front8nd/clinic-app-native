import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
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
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    columns: tableColumns,
    data: tableData || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Table className="min-w-full border border-gray-300">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const sortingOrder = header.column.getIsSorted();
                return (
                  <TableHead
                    className="border border-gray-400 bg-gray-100 p-2 text-sm font-bold text-center text-nowrap min-w-32 w-fit"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <TouchableOpacity
                        disabled={!canSort}
                        onPress={header.column.getToggleSortingHandler()}
                      >
                        <Text
                          className={`flex justify-start items-start gap-2 text-sm font-bold text-nowrap min-w-42 w-full`}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}{" "}
                          {sortingOrder === "asc"
                            ? " 🔼"
                            : sortingOrder === "desc"
                            ? " 🔽"
                            : ""}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </TableHead>
                );
              })}
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
                    className="border border-b-0 border-gray-400 p-2 text-sm text-center text-nowrap min-w-32 w-fit"
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
