import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>sign Up</Text>
      <Link href="/(auth)/signIn" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Sign In</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default signUp;
