import { Link } from "expo-router";
import "@/global.css";
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Go to Onboarding</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/signIn" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Sign In</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/signUp" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Sign Up</Text>
        </Pressable>
      </Link>

      <Link href="/subscriptions/spotify" asChild>
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Spotify Subscription</Text>
        </Pressable>
      </Link>

      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        asChild
      >
        <Pressable className="mt-4 rounded bg-primary px-6 py-4">
          <Text className="text-white">Claude max subscription</Text>
        </Pressable>
      </Link>
    </View>
  );
}
