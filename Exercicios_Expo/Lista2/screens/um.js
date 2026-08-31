import { View } from "react-native";
import Constants from "expo-constants";

export default function Um() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}>
        <View style={{ flex: 0.5, 
          backgroundColor: "crimson" 
          }} />
        <View style={{ flex: 0.5, 
          backgroundColor: "salmon" 
          }} />
    </View>
  );
}