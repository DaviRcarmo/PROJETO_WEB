import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";

const Dois = () => {
  const [mode, setMode] = useState("portrait");

  useEffect(() => {
    const lerOrientacao = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      atualizarModo(orientation);
    };
    lerOrientacao();

    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => atualizarModo(orientationInfo.orientation)
    );

    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  const atualizarModo = (orientation) => {
    if (
      orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
      orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    ) setMode("portrait");
    else if (
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) setMode("landscape");
  };

const styles = mode === "landscape" ? landscapeStyles : portraitStyles;

  return (
    <SafeAreaView style={[styles.container, { flexDirection: mode === "landscape" ? "row" : "column" }]}>
      <View style={styles.top}><Text>Top</Text></View>
      <View style={styles.middle}><Text>Middle</Text></View>
      <View style={styles.bottom}><Text>Bottom</Text></View>
    </SafeAreaView>
  );
};

const portraitStyles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight },
  titleBar: { padding: 12, alignItems: "center", backgroundColor: "#FFA07A" },
  titleText: { fontWeight: "bold" },
  content: { flex: 1 },
  middle: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F08080" },
  bottom: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FF6347" },
});

const landscapeStyles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight },
  titleBar: { padding: 12, alignItems: "center", backgroundColor: "#FFFFE0" },
  titleText: { fontWeight: "bold" },
  content: { flex: 1 },
  middle: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#EEE8AA" },
  bottom: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#808000" },
});
export default Dois;