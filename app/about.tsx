import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from 'expo-router';
import { Pressable } from "react-native";

//ICONS
import { HomeIcon } from "components/Icons";
import Screen from "components/Screen";

export default function About() {

  return (
    // <View className="w-full" style={styles.container}>
    <Screen>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#09f",
          },
        }}
      />
      <View style={styles.main}>
        <View className="flex-1 bg-white w-full items-center justify-center">
          <Text className="text-blue-500" style={styles.title}>About</Text>
          {/* </View> */}

          {/* <View className="flex-1 bg-gray-400 w-full"> */}
          {/* <View className="items-center justify-center"> */}
          {/* <Link href="/" asChild className="w-28"> */}
          {/* <Pressable className="flex flex-row items-center justify-center gap-2 p-1 active:opacity-70"> */}
          {/* <Text className="text-center text-white font-bold ">Home</Text> */}
          {/* <HomeIcon /> */}
          {/* <Text className="text-center text-white font-bold" style={{ opacity: pressed ? 0.5 : 1 }} >Home</Text>
                <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} /> */}
          {/* </Pressable> */}
          {/* </Link> */}
        </View>
      </View>
    </Screen>
    // </View>
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
