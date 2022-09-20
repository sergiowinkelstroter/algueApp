import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { SwiperComponent } from "../../components/Swiper";
import Stars from "react-native-stars";
import Image01 from "../../assets/house1.jpg";
import Image02 from "../../assets/house2.jpg";
import Image03 from "../../assets/house3.jpg";

export function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Stars
              default={4}
              count={5}
              half={true}
              color={"trasparent"}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={20} style={styles.myStarStyle} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={20}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Ionicons
                  name="md-star-half"
                  size={20}
                  style={styles.myStarStyle}
                />
              }
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>R$ 1.200,20</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quas
        vel.
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 35 }}
      >
        <View style={styles.slide}>
          <Image
            source={Image01}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={Image02}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={Image03}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
