import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../../context/auth";

// This is the guest layout of the app and it is used for unauthenticated users

export default function GuestLayout() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  // Redirect to home page if authenticated
  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
