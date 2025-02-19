import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import { Pressable } from "react-native";

//ICONS
import { HomeIcon } from "components/Icons";

export default function About() {

  return (
    <View className="w-full" style={styles.container}>

      <View style={styles.main}>
        <Text className="text-blue-500" style={styles.title}>About</Text>
      </View>

      <View className=" bg-gray-400 w-full">
        <View className="items-center justify-center">
          <Link href="/" asChild className="w-28">
            <Pressable className="flex flex-row items-center justify-center gap-2 p-1 active:opacity-70">
              {/* <Text className="text-center text-white font-bold" style={{ opacity: pressed ? 0.5 : 1 }} >Home</Text>
                <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} /> */}
              <Text className="text-center text-white font-bold ">Home</Text>
              <HomeIcon />
            </Pressable>
          </Link>
        </View>
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
