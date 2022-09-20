import { Text, View, ScrollView, TextInput, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { New } from "../../components/New";

import Image01 from "../../assets/house1.jpg";
import Image02 from "../../assets/house2.jpg";
import Image03 from "../../assets/house3.jpg";
import Image04 from "../../assets/house4.jpg";
import Image05 from "../../assets/house5.jpg";
import Image06 from "../../assets/house6.jpg";

import { useNavigation } from "@react-navigation/native";
import { SectionTitle } from "../../components/SectionTitle";
import { House } from "../../components/House";
import { Recommended } from "../../components/Recommended";

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

      <SectionTitle title="Novidades" />

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

      <SectionTitle title="Próximo de você" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House cover={Image04} />
        <House cover={Image05} />
        <House cover={Image06} />
      </ScrollView>

      <SectionTitle title="Dica do dia" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <Recommended cover={Image03} house="Casa Floripa" offer="20%" />
        <Recommended cover={Image02} house="Casa na Praia" offer="10%" />
        <Recommended cover={Image05} house="Rancho" offer="5%" />
      </ScrollView>
    </ScrollView>
  );
}
