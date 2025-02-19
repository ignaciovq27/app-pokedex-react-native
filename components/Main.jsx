//REACT
import { useEffect, useState } from "react";

//COMPONENTS REACT-NATIVE
import { StyleSheet } from "react-native";
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
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
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
          <View style={{ height: 40, padding: 6, backgroundColor: "#E0E0E0" }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centra elr contenido verticalmente
    // alignItems: "center",      // Centra el contenido horizontalmente
  },
  scrollViewContainer: {
    alignItems: "center",
    paddingTop: 14,
    // paddingHorizontal: 16,
  },
  flatListContainer: {
    alignItems: "center",
    paddingTop: 14,
    // paddingHorizontal: 16,
  },
});
