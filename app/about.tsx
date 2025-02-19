import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';
import { Pressable } from "react-native";

//ICONS
import { HomeIcon } from "components/Icons";

export default function About() {

  const getOpacityStyle = (pressed: boolean) => ({
    opacity: pressed ? 0.5 : 1,
  });

  return (
    <View className="w-full" style={styles.container}>

      <View style={styles.main}>
        <Text className="text-blue-500" style={styles.title}>About</Text>
      </View>

      <View className="w-full">
        <Link href="/" asChild className="w-full bg-gray-400">
          <Pressable className="w-full flex flex-row items-center justify-center gap-2 p-1">
            {({ pressed }) => (
              <>
                {/* <Text className="text-center text-white font-bold" style={{ opacity: pressed ? 0.5 : 1 }} >Home</Text>
                <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} /> */}

                <Text className="text-center text-white font-bold" style={getOpacityStyle(pressed)}>Home</Text>
                <HomeIcon style={getOpacityStyle(pressed)} />
              </>
            )}
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
