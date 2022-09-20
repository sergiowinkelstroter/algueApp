import React from "react";
import { Text, View, ImageBackground } from "react-native";

import { styles } from "./styles";

export function Recommended(props) {
  return (
    <ImageBackground
      source={props.cover}
      style={styles.container}
      blurRadius={5}
    >
      <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
      <Text style={[styles.description, styles.shadow]}>{props.offer} OFF</Text>
    </ImageBackground>
  );
}
