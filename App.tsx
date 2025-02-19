import { ScreenContent } from "components/ScreenContent";
// import { StatusBar } from 'expo-status-bar';

//REACT

//CSS
// import "./global.css";

//COMPONENTS EXPO
import { StatusBar } from "expo-status-bar";

//COMPONENTS REACT-NATIVE
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//COMPONENTS
import { Main } from "./components/Main";

//ICONS
// import icon from "./assets/icon.png";

export default function App() {
  return (
    // <>
    //   <ScreenContent title="Home" path="App.tsx" />
    //   <StatusBar style="auto" />
    // </>

    <SafeAreaProvider>
      {/* <ScreenContent title="Home" path="App.tsx" /> */}
      {/* <StatusBar style="auto" /> */}
      <View style={styles.container}>
        <StatusBar style="light" />
        {/* <Main /> */}
        {/* <Button title="Press me" onPress={() => alert("Button pressed")} /> */}
        {/* <Pressable
        onPress={() => {
          // alert("Button pressed")
        }}
      >
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? "red" : "blue",
              fontSize: pressed ? 30 : 16,
            }}
          >
            {pressed ? "Presed!" : "Press me"}
          </Text>
        )}
      </Pressable> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
