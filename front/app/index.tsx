import { Button, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/login" asChild>
        <Button title="Go to Login" />
      </Link>
    </View>
  );
}
