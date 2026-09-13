import "@/global.css";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold text-primary">Home</Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-4   rounded bg-primary px-6 py-4">
          <Text className="text-white font-sans-bold">Go to Onboarding</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/signIn" asChild>
        <Pressable className="mt-4 rounded   bg-primary px-6 py-4">
          <Text className="text-white font-sans-bold">Sign In</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/signUp" asChild>
        <Pressable className="mt-4 rounded   bg-primary px-6 py-4">
          <Text className="text-white font-sans-bold">Sign Up</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
