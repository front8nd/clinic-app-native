import { Slot } from "expo-router";
import { GluestackUIProvider } from "@/components/gluestack/gluestack-ui-provider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/context/auth";
import "../../global.css";
import ErrorBoundary from "react-native-error-boundary";

// This is the root layout of the app and it is used to wrap the entire app with the providers

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GluestackUIProvider mode="light">
            <AuthProvider>
              <Slot screenOptions={{ headerShown: false }} />
            </AuthProvider>
          </GluestackUIProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}
