import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const onPress = () => {
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={require("../assets/images/BackGround.jpg")}
          style={styles.backgroundImage}
          resizeMode="cover" // ou "contain"
        >
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 450,   // largura da imagem
    height: 1000,  // altura da imagem
    overflow: "hidden",
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#090909",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "green",
    fontSize: 16,
  },
});
