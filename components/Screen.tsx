import { Text, View } from "react-native";

import { ReactNode } from "react";

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <View className="flex-1 bg-white" >
      {children}
    </View>
  );
}