import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

export const Header = ({ image }: { image: ImageSourcePropType }) => {
    return (
        <View style={styles.background}>
            <Image source={image} style={styles.img} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FF6E09',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
    },
    img: {
        width: 150, 
        height: 130,
    }
});