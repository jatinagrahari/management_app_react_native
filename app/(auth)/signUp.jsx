import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const signUp = () => {
  return (
    <View>
      <Text>sign in</Text>
      <Link href="/(auth)/signIn" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Sign In</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default signUp;
