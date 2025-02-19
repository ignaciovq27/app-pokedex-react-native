// app/pokemon/layout.tsx
import { View, Text, StyleSheet } from "react-native";

interface PokemonLayoutProps {
    children: React.ReactNode;
}

const PokemonLayout: React.FC<PokemonLayoutProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Detalles del Pokémon</Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default PokemonLayout;
