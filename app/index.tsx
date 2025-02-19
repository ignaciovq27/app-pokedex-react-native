import { Main } from "components/Main";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>POKEWORLD</Text>
        <Text style={styles.subtitle}>La Pokedex definitiva del mundo Pokémon </Text>
        <Main />
      </View>

      <View className="w-full bg-gray-400">
        <Link className="text-center text-white font-bold" href=" /about">About</Link>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 24,
    width: "100%",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    // maxWidth: 960,
    marginHorizontal: "auto",
    width: "100%",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    color: "#38434D",
    textAlign: "center",
    width: "60%",
    // maxWidth: 300,
    margin: "auto",
    fontStyle: "italic",
  },
});
