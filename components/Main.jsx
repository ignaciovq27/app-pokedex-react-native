//REACT
import { useEffect, useState } from "react";

//COMPONENTS REACT-NATIVE
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
// import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//COMPONENTS
import Card, { AnimatedCard } from "./Card";
import { Logo } from "./Logo";

//JSON
import { getPokemonList } from "../lib/pokemonData";
import Screen from "./Screen";

export function Main() {
  const [pokemonData, setPokemonData] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getPokemonList().then((data) => {
      console.log(data);
      setPokemonData(data);
    });
  }, []);

  return (
    <Screen>
      {/* <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}> */}
      {/* <View style={{ height: 40, padding: 6, backgroundColor: "#E0E0E0" }}>
        <Logo />
      </View> */}
      {pokemonData.length === 0 ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        // <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        //   {pokemonData.map((pokemon) => (
        //     <Card key={pokemon.id} pokemon={pokemon} />
        //   ))}
        // </ScrollView>
        <>
          <View className="bg-red-500 h-10 py-1">
            <Logo />
          </View>

          <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={pokemonData}
            renderItem={({ item, index }) => <AnimatedCard pokemon={item} index={index} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centra elr contenido verticalmente
    // alignItems: "center",      // Centra el contenido horizontalmente
    width: "100%",

  },
  scrollViewContainer: {
    alignItems: "center",
    paddingTop: 14,
    // paddingHorizontal: 16,
  },
  flatListContainer: {
    alignItems: "center",
    paddingTop: 14,
    width: "100%",
    // paddingHorizontal: 16,
  },
});
