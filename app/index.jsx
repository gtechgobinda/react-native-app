import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Aora!</Text>
      {/* <StatusBar style="auto" /> */}
      <StatusBar />
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
