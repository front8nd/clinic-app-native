import { Stack } from "expo-router";

// This is the guest layout of the app and it is used for unauthenticated users

export default function GuestLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
