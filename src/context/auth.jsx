import React, { createContext, useContext, useEffect, useState } from "react";
import {
  clearAuthStorage,
  getToken,
  getUserData,
  setToken,
  setUserData,
} from "@/storage/auth";
import emitter from "../lib/event-emit";
import { Redirect, useRouter, useSegments } from "expo-router";
import { GUEST_ROUTES } from "../constants/routes";
import { ActivityIndicator } from "react-native";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const segments = useSegments();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check Auth on Startup
  const onStartUp = async () => {
    console.log("🚀 Checking Auth on Startup...");
    setIsLoading(true);
    const token = await getToken();
    const userData = await getUserData();
    if (token && userData) {
      setIsAuthenticated(true);
      console.log("🚀 Auth on Startup Successful!");
    } else {
      // Only clear storage if partial data exists (possible corruption)
      if (token || userData) {
        console.warn("⚠️ Possible data corruption. Clearing Auth Storage...");
        await clearAuthStorage();
      }
      setIsAuthenticated(false);
      console.log("🚨 Auth on Startup Failed! 🚨");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    onStartUp();
  }, []);

  // SignIn

  const onSignIn = async (data) => {
    setIsAuthenticated(true);
    await setToken(data.token);
    await setUserData(data.user);
  };

  // Logout

  const onLogout = async () => {
    setIsAuthenticated(false);
    await clearAuthStorage();
  };

  // Handle Unauthorized Requests

  useEffect(() => {
    emitter.on("unauthorized", onLogout);
    return () => {
      emitter.off("unauthorized", onLogout);
    };
  }, []);

  //  Handle Redirects Based on Authentication and Route Type
  useEffect(() => {
    if (isLoading) return;

    const currentPath = `/${segments.join("/")}`;

    if (!isAuthenticated && !GUEST_ROUTES.includes(currentPath)) {
      console.log("🚨 Redirecting unauthenticated user to login... 🚨");
      router.replace("/login"); // Unauthenticated users should go to login
    } else if (isAuthenticated && GUEST_ROUTES.includes(currentPath)) {
      console.log("🚨 Redirecting authenticated user to home... 🚨");
      router.replace("/"); // Authenticated users should avoid guest pages
    }
  }, [isAuthenticated, isLoading, segments]);

  if (isLoading) return <ActivityIndicator />;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, onSignIn, onLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
