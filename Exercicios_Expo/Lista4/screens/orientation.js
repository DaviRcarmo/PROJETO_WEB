import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";

const Orientation = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    readOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => atualizarModo(orientationInfo.orientation)
    );

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const atualizarModo = (orientation) => {
    if (
      orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
      orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    ) {
      setMode("portrait");
    } else if (
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) {
      setMode("landscape");
    }
  };

  const readOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    atualizarModo(orientation);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: mode === "landscape" ? "#1E90FF" : "#FFA500" }]}
    >
      <Text>Tela em modo {mode}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Orientation;