import React from 'react'
import { Pressable, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { HomeIcon } from 'components/Icons'

import { useLocalSearchParams } from 'expo-router'

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
        <>
            <View className="flex-1" style={styles.container}>
                <View>
                    <Text className="text-blue-500 px-2 text-center">Detalles de {capitalizeFirstLetter(name)}</Text>
                </View>

            </View>
            <View className=" bg-gray-400 w-full">
                <View className="items-center justify-center">
                    <Link href="/" asChild className="w-28">
                        <Pressable className="flex flex-row items-center justify-center gap-2 p-1 active:opacity-70">
                            <Text className="text-center text-white font-bold ">Home</Text>
                            <HomeIcon />
                        </Pressable>
                    </Link>
                </View>
            </View>
        </>
    )
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