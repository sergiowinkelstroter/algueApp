import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function SectionTitle(props) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}
