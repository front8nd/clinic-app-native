import { Slot } from "expo-router";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "../context/auth";
import "../../global.css";

// This is the root layout of the app and it is used to wrap the entire app with the providers

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}
