import { Gaps } from "@/shared/theme";
import React from "react";
import { StyleSheet, View } from 'react-native';

export function RecipesScreen() {
    return <View style={styles.wrapper} />;
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'column',
        gap: Gaps.g25,
        padding: 20,
        flex: 1
    }
})
