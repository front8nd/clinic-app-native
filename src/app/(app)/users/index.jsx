import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View, Text, Button } from "react-native";
import { users } from "../../../services/users";

export default function Index() {
  const { data, isPending, error, isError, status } = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });

  console.log(status);
  return (
    <View>
      <Text>You're Viewing Users List</Text>
    </View>
  );
}
