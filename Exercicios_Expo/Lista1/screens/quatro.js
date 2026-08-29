import { View, Image } from "react-native";
import Constants from "expo-constants";
import logo from "../assets/adaptive-icon.png";

export default function ex4() {
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
                >
                    <Image
                        source={logo}
                        style={{
                            flex: 1,
                            alignSelf: "center",
                        }}
                        resizeMode="contain"
                />
                </View>    
                
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
                >
                    <Image
                        source={logo}
                        style={{
                            flex: 1,
                            alignSelf: "center",
                        }}
                        resizeMode= "contain"
                />
                </View>

                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "skyblue",
                    }}
                >
                    <Image
                        source={logo}
                        style={{
                            flex: 1,
                            alignSelf: "center",
                        }}
                        resizeMode= "contain"
                />
                </View>
                </View>
            </View>

            <View
                style={{
                    flex: 0.5,
                    backgroundColor: "salmon",
                    }}
            >
                <Image
                    source={logo}
                    style={{
                        flex: 1,
                        alignSelf: "center",
                    }}
                    resizeMode= "contain"    
            />
            </View>
        </View>
    );
}