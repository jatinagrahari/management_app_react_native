import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>sign Up</Text>
      <Link href="/(auth)/signIn">Already have an account! Login</Link>
    </View>
  );
};

export default SignUp;
