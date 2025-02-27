//COMPONENTS REACT-NATIVE
import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, Pressable } from "react-native";

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
}


export default function Card({ pokemon }: { pokemon: Pokemon }) {
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Link href={`/pokemon/${pokemon.name}`} asChild>
      <Pressable className="active:scale-90 active:opacity-70">
        <View key={pokemon.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: pokemon.sprite }}
              style={styles.sprite}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{capitalizeFirstLetter(pokemon.name)}</Text>
            <Text style={styles.id}>#{pokemon.id}</Text>
            <Text style={styles.type}>
              {pokemon.types.map(capitalizeFirstLetter).join(" - ")}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedCard({ pokemon, index }: { pokemon: Pokemon; index: number }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Card pokemon={pokemon} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 220,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 16,
    elevation: 2, // Sombra en Android
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    flex: 1, // Ocupa el 50% de la card
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  sprite: {
    width: 300,
    height: 200,
  },

  info: {
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  id: {
    fontSize: 14,
    color: "#333",
  },

  type: {
    fontSize: 14,
    color: "#442",
  },
});
