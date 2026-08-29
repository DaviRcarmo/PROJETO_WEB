import { View } from "react-native";
import Constants from "expo-constants";

export default function ex3() {
    return (
        <View
            style={{
            flex: 1,
            paddingTop: Constants.statusBarHeight,
            }}
        >
            <View
                style={{
                flex: 0.5,
                flexDirection: "row",
            }}
            >
            <View
                style={{
                flex: 0.5,
                backgroundColor: "lime",
                }}
            />

                <View
                    style={{
                    flex: 0.5,
                    flexDirection: "column",
                    }}
                >
                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "teal",
                    }}
                />

                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "skyblue",
                    }}
                />
                </View>
        </View>

        <View
            style={{
                flex: 0.5,
                backgroundColor: "salmon",
                }}
            />
        </View>
    );
}