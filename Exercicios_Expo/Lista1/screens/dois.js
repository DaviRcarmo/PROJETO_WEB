import { View } from "react-native";
import Constants from "expo-constants";

export default function Ex2() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}>
      <View style={{ flex: 0.5, 
        flexDirection: "row",
        backgroundColor: "crimson" 
        }}>
            <View style={{ flex: 0.5,
                backgroundColor: "lime"
            }}/>
            <View style={{ flex: 0.5,
                backgroundColor: "aquamarine"
            }}/>
        </View>
      <View style={{ flex: 0.5, 
        backgroundColor: "salmon" 
        }} />
    </View>
  );
}