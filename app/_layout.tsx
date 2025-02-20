import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";
import { Stack } from "expo-router";
import { Logo } from "components/Logo";

//CSS TAILWIND
import "../global.css";

export default function Layout() {
    return (
        <View className="flex-1" style={styles.container}>
            {/* <Text className="text-blue-500 px-2 text-center">_Layout </Text> */}
            <View className="flex-1" style={styles.container}>
                {/* <Slot /> */}
                <Stack
                    screenOptions={
                        {
                            headerShown: false,
                            // headerStyle: {
                            //     backgroundColor: "#09f",
                            // },
                            // headerTintColor: "#fff",
                            // headerTitle: "",
                            // headerTitleStyle: {
                            //     fontWeight: "bold",
                            // },
                            // headerLeft: () => (
                            //     <Text className="text-white px-2">_Layout</Text>
                            // ),
                            // headerLeft: () => (
                            //     <Logo />
                            // ),
                        }
                    }

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        padding: 0,
        margin: 0,
    },
});
