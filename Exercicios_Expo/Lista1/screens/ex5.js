import { View, Image, TouchableOpacity, Alert } from "react-native";
import Constants from "expo-constants";
import logo from "../assets/adaptive-icon.png";

export default function ex5() {
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
                {/* VERDE */}
                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: "lime",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => Alert.alert("Boa noite!")}
                    >
                        <Image
                            source={logo}
                            style={{
                                width: 64,
                                height: 64,
                            }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                {/* PARTE DA DIREITA */}
                <View
                    style={{
                        flex: 0.5,
                        flexDirection: "column",
                    }}
                >
                    {/* TEAL */}
                    <View
                        style={{
                            flex: 0.5,
                            backgroundColor: "teal",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => Alert.alert("Boa noite!")}
                        >
                            <Image
                                source={logo}
                                style={{
                                    width: 64,
                                    height: 64,
                                }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* AZUL */}
                    <View
                        style={{
                            flex: 0.5,
                            backgroundColor: "skyblue",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => Alert.alert("Boa noite!")}
                        >
                            <Image
                                source={logo}
                                style={{
                                    width: 64,
                                    height: 64,
                                }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* SALMÃO */}
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: "salmon",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity
                    onPress={() => Alert.alert("Boa noite!")}
                >
                    <Image
                        source={logo}
                        style={{
                            width: 64,
                            height: 64,
                        }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}