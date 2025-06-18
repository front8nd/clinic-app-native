import { createColumnHelper } from "@tanstack/react-table";
import { Text } from "react-native";

const columnHelper = createColumnHelper();

const commonTextStyle = {
  fontSize: 14,
  fontWeight: "500",
  minWidth: 120,
  maxWidth: 200,
};

const columns = [
  columnHelper.accessor("name", {
    id: "name",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Name</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue()}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("email", {
    id: "email",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Email</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue()}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("role", {
    id: "role",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Role</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue()}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("specialization", {
    id: "specialization",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>
        Specialization
      </Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue() || "-"}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("staffRole", {
    id: "staffRole",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Staff Role</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue() || "-"}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("experience", {
    id: "experience",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>
        Experience (Years)
      </Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue()}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("dob", {
    id: "dob",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>
        Date of Birth
      </Text>
    ),
    cell: (info) =>
      info.getValue() ? (
        <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
          {new Date(info.getValue()).toDateString()}
        </Text>
      ) : (
        <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
          -
        </Text>
      ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("birthYear", {
    id: "birthYear",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Birth Year</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue() || "-"}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("contact", {
    id: "contact",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Contact</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue() || "-"}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("address", {
    id: "address",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Address</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {info.getValue() || "-"}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Created At</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {new Date(info.getValue()).toLocaleString()}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
  columnHelper.accessor("updatedAt", {
    id: "updatedAt",
    header: () => (
      <Text style={{ ...commonTextStyle, fontWeight: "bold" }}>Updated At</Text>
    ),
    cell: (info) => (
      <Text style={commonTextStyle} numberOfLines={1} ellipsizeMode="tail">
        {new Date(info.getValue()).toLocaleString()}
      </Text>
    ),
    sortUndefined: "last",
    sortDescFirst: false,
  }),
];

export default columns;
