import { Text, View, ScrollView, TextInput, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { New } from "../../components/New";

import Image01 from "../../assets/house1.jpg";
import Image02 from "../../assets/house2.jpg";
import Image03 from "../../assets/house3.jpg";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="O que esta procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={Image01}
          name="Casa de Praia"
          description="Casa nova, uma quadra do mar, lugar seguro e monitorado 24horas"
          onPress={() => navigation.navigate("detail")}
        />
        <New
          cover={Image02}
          name="Casa Floripa"
          description="Casa nova, uma quadra do mar, lugar seguro e monitorado 24horas"
          onPress={() => {}}
        />
        <New
          cover={Image03}
          name="Racho SP"
          description="Casa nova, uma quadra do mar, lugar seguro e monitorado 24horas"
          onPress={() => {}}
        />
      </ScrollView>
    </ScrollView>
  );
}
