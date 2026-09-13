import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>sign in</Text>
      <Link href="/(auth)/signUp" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default signIn;
