import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1  items-center justify-center bg-blue-500">
      <Text className="text-red-600">You&apos;re viewing homepage</Text>
      <Button title="Users List" onPress={() => router.push("/users")} />

      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
}
