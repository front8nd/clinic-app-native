import { useState } from "react";
import { Button, StyleSheet, View, TextInput, Alert } from "react-native";
import { Link } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/auth";
import { Login } from "../../services/auth";

export default function Index() {
  const { onSignIn } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      onSignIn(data);
      Alert.alert("Success!", "You are now logged in!");
      console.log("🚀 Successful Sign In:", data);
    },
    onError: (error) => {
      Alert.alert("Error!", "Something went wrong!");
      console.log("🚨 Error Signing In:", error);
    },
  });

  const handleSubmit = () => {
    mutate(formData);
    console.log("📝 Form Data:", formData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange("email", value)}
        value={formData.email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange("password", value)}
        value={formData.password}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry
      />

      <Link href="/">LINK</Link>

      <Button
        disabled={isPending}
        title={isPending ? "Loading..." : "Login"}
        onPress={handleSubmit}
      />
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
    padding: 10,
    borderRadius: 10,
  },
});
