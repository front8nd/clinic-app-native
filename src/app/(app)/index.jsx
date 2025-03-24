import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../context/auth";
import ButtonSheet from "@/components/buttom-sheet";

export default function Index() {
  const router = useRouter();
  const { onLogout } = useAuth();

  return (
    <View className="flex-1  items-center justify-center bg-blue-500">
      <Text className="text-red-600">You&apos;re viewing homepage</Text>
      <Button title="login" onPress={() => router.push("/login")} />
      <ButtonSheet />
      <Button title="profile" onPress={() => router.push("/profile")} />
      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
}
