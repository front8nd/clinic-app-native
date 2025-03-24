import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../context/auth";
import { ActivityIndicator } from "react-native";

// This is the app layout of the app and it is used for authenticated users

export default function AppLayout() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
