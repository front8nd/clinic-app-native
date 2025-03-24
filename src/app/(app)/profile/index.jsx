import { StyleSheet, View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../../context/auth";

export default function Index() {
  const { onLogout } = useAuth();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>You're Viewing Profile</Text>
      <Button title="home" onPress={() => router.push("/")} />

      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
