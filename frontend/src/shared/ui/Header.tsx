import { Colors, Fonts, FontSizes } from "@/shared/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Header({ text }: { text: string }) {
    return <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    text:{
        fontFamily: Fonts.bold,
        fontSize: FontSizes.f24,
        color: Colors.brown
    },
});
