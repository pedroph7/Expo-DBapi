import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SafeAreaView, View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

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
                    resizeMode="cover"
                >

                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.0)', 'rgba(149, 93, 55, 0.1)','rgba(149, 93, 55, 0.8)', 'rgba(244, 117, 29, 1)']}
                        style={styles.gradientOverlay}
                    >
                       <Text style={styles.descText}>API do Dragon Ball para apresentar personagens, poderes e curiosidades.Goku: um saiyajin enviado à Terra, criado como humano, que supera seus limites em batalhas para proteger seus amigos e o universo.</Text>
                        <TouchableOpacity style={styles.button} onPress={onPress}>
                            <Text style={styles.btnText}>ENTRAR</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    imageWrapper: {
        flex: 1,
        borderRadius: 10,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    gradientOverlay: {
        flex: 1,
        justifyContent: "flex-end", 
        alignItems: "center",
        paddingBottom: 40, 
    },
    button: {
        backgroundColor: "#414141",
        padding: 12,
        borderRadius: 30,
        width: '25%',
    },
    btnText: {
        color: "#FFD900",
        fontSize: 14,
        textAlign: "center",
    },
    descText: {
      color: "white",
      textAlign: "center",
      padding: 20,
      fontSize: 17,
    },
    
});