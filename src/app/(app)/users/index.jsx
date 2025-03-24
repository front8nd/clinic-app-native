import { useQuery } from "@tanstack/react-query";
import { users } from "@/services/users";

import { useMemo } from "react";
import CustomTable from "../../../components/table";

export default function Index() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });

  const columns = useMemo(() => data, [data]);
  console.log(columns);
  return <CustomTable data={data} columns={columns} isPending={isPending} />;
}
