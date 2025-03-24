import { Stack } from "expo-router";

// This is the app layout of the app and it is used for authenticated users

export default function AppLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
