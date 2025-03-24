import { useQuery } from "@tanstack/react-query";
import { users } from "@/services/users";

import {
  Table,
  TableHeader,
  TableFooter,
  TableBody,
  TableHead,
  TableData,
  TableRow,
  TableCaption,
} from "@/components/gluestack/table";

export default function Index() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });

  console.log(data);
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email Address</TableHead>
          <TableHead>Phone Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableData>Rajesh Kumar</TableData>
          <TableData fontWeight="$normal">rajesh@example.com</TableData>
          <TableData fontWeight="$normal">1234567890</TableData>
        </TableRow>
        <TableRow>
          <TableData>Priya Sharma</TableData>
          <TableData fontWeight="$normal">priya@example.com</TableData>
          <TableData fontWeight="$normal">1234567890</TableData>
        </TableRow>
        <TableRow>
          <TableData>Ravi Patel</TableData>
          <TableData fontWeight="$normal">ravi@example.com</TableData>
          <TableData fontWeight="$normal">1234567890</TableData>
        </TableRow>
        <TableRow>
          <TableData>Ananya Gupta</TableData>
          <TableData fontWeight="$normal">ananya@example.com</TableData>
          <TableData fontWeight="$normal">1234567890</TableData>
        </TableRow>
        <TableRow>
          <TableData>Arjun Singh</TableData>
          <TableData fontWeight="$normal">arjun@example.com</TableData>
          <TableData fontWeight="$normal">1234567890</TableData>
        </TableRow>
        <TableRow>
          <TableData>Nisha Verma</TableData>
          <TableData fontWeight="$normal">nisha@example.com</TableData>
          <TableData fontWeight="$normal">1234567890</TableData>
        </TableRow>
      </TableBody>
      <TableCaption fontWeight="$normal">
        Showing recent membership details
      </TableCaption>
    </Table>
  );
}
