import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "authToken";
const USER_DATA_KEY = "userData";

/* 🔹 Token Storage - SecureStore 🔹 */

export const setToken = async (token) => {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
    console.log("✅ Token saved securely.");
  } catch (error) {
    console.error("❌ Error saving token:", error);
  }
};

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);
    return token || null;
  } catch (error) {
    console.error("❌ Error retrieving token:", error);
    return null;
  }
};

export const deleteToken = async () => {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    console.log("🗑️ Token deleted.");
  } catch (error) {
    console.error("❌ Error deleting token:", error);
  }
};

/* 🔹 User Data Storage - SecureStore 🔹 */

export const setUserData = async (userData) => {
  try {
    await SecureStore.setItemAsync(USER_DATA_KEY, JSON.stringify(userData));
    console.log("✅ User data saved securely.");
  } catch (error) {
    console.error("❌ Error saving user data:", error);
  }
};

export const getUserData = async () => {
  try {
    const data = await SecureStore.getItemAsync(USER_DATA_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("❌ Error retrieving user data:", error);
    return null;
  }
};

export const deleteUserData = async () => {
  try {
    await SecureStore.deleteItemAsync(USER_DATA_KEY);
    console.log("🗑️ User data deleted.");
  } catch (error) {
    console.error("❌ Error deleting user data:", error);
  }
};

/* 🔹 Clear All Data (Token + User Data) 🔹 */
export const clearAuthStorage = async () => {
  await deleteToken();
  await deleteUserData();
};
