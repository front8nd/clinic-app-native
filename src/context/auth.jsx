import React, { createContext, useContext, useEffect, useState } from "react";
import {
  clearAuthStorage,
  getToken,
  getUserData,
  setToken,
  setUserData,
} from "@/storage/auth";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onStartUp = async () => {
    console.log("🚀 Checking Auth on Startup...");
    setIsLoading(true);
    const token = await getToken();
    const userData = await getUserData();
    if (token && userData) {
      setIsAuthenticated(true);
      console.log("🚀 Auth on Startup Successful!");
    } else {
      if (!token || !userData) {
        console.log("🚨 Clearing Auth Storage...");
        await clearAuthStorage();
      }
      setIsAuthenticated(false);
      console.log("🚨 Auth on Startup Failed!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    onStartUp();
  }, []);

  const onSignIn = async (data) => {
    setIsAuthenticated(true);
    await setToken(data.token);
    await setUserData(data.user);
  };

  const onLogout = async () => {
    setIsLoading(true);
    setIsAuthenticated(false);
    await clearAuthStorage();
    setIsLoading(false);
  };

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
