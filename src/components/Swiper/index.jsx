import { Image, View } from "react-native";

import { styles } from "./styles";

import Swiper from "react-native-swiper";

import Image02 from "../../assets/house2.jpg";
import Image03 from "../../assets/house3.jpg";
import Image04 from "../../assets/house4.jpg";

export function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >
      <View style={styles.slide}>
        <Image source={Image02} style={{ width: "100%", height: 400 }} />
      </View>
      <View style={styles.slide}>
        <Image source={Image03} style={{ width: "100%", height: 400 }} />
      </View>
      <View style={styles.slide}>
        <Image source={Image04} style={{ width: "100%", height: 400 }} />
      </View>
    </Swiper>
  );
}
