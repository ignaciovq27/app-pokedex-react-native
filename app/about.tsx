import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import { Pressable } from "react-native";

export default function About() {
  return (
    <View className="w-full" style={styles.container}>

      <View style={styles.main}>
        <Text className="text-blue-500" style={styles.title}>About</Text>
      </View>

      <View className="w-full">
        <Link href="/" asChild className="w-full bg-gray-400">
          <Pressable className="w-full">
            <Text className="text-center text-white font-bold">Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    // maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  }
});
