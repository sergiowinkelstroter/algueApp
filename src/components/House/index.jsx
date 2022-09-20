import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function House(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.cover} style={styles.cover} />
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text style={styles.price}>R$ 954,60</Text>
      </View>
    </View>
  );
}
