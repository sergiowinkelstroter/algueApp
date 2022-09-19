import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { Image } from "react-native";

export function New(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image source={props.cover} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.dot}></View>

        <Text style={styles.badge}>Novo</Text>
      </View>

      <Text style={styles.description}>{props.description}</Text>

      <View style={styles.footer}>
        <View style={{ width: "80%" }}>
          <Text style={styles.price}>R$ 1.204,90</Text>
        </View>
        <View style={{ width: "80%" }}>
          <Ionicons name="ios-add-circle" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
