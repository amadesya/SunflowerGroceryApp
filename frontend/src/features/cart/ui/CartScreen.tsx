import { Gaps } from "@/shared/theme";
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export function CartScreen() {
    return (
        <View style={styles.wrapper}>
            <Text> Корзина</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'column',
        gap: Gaps.g25,
        padding: 20
    }
})
