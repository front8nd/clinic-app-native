import { useQuery } from "@tanstack/react-query";
import { users } from "@/services/users";

import { useMemo } from "react";
import CustomTable from "../../../components/table";
import columns from "./columns";

export default function Index() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });

  const tableData = useMemo(() => data, [data]);
  const tableColumns = columns;
  console.log(isPending);
  return (
    <CustomTable
      tableData={tableData}
      tableColumns={tableColumns}
      isPending={isPending}
    />
  );
}
