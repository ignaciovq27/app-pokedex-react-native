import React from 'react'
import { Pressable, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { Link, Stack } from 'expo-router'
import Screen from 'components/Screen'
import { HomeIcon } from 'components/Icons'

import { useLocalSearchParams } from 'expo-router'
import { Logo } from 'components/Logo'

export default function PokemonDetail() {

    const { name } = useLocalSearchParams();
    console.log(name);

    const capitalizeFirstLetter = (input: string | string[]): string => {
        if (Array.isArray(input)) {
            return input.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(", ");
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    };


    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#ef4444",
                    },

                    headerTitle: capitalizeFirstLetter(Array.isArray(name) ? name.join(", ") : name),
                }}
            />
            <View className="flex-1" style={styles.container}>
                <View>
                    <Text className="text-blue-500 px-2 text-center">Detalles de {capitalizeFirstLetter(name)}</Text>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 0,
        margin: 0,
    },
});