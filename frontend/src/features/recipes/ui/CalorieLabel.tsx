import { Colors, Fonts, FontSizes, Radius } from "@/shared/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function CalorieLabel({ text }: { text: string }) {
    return <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: Radius.r25,
        backgroundColor: Colors.orange + '40',
        alignSelf: 'flex-start'
    },
    text:{
        fontFamily: Fonts.regular,
        fontSize: FontSizes.f16,
        color: Colors.brown
    },
});
