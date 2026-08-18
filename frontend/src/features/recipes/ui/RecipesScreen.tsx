import { ProductSearch } from "@/features/catalog";
import { Colors, Gaps } from '@/shared/theme';
import React from "react";
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecipeList } from "./RecipeList";

export function RecipesScreen() {
    return(
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <View style={styles.wrapper}>
                <ProductSearch />
                <RecipeList />
            </View>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.beige,
    },
    wrapper: {
        flex: 1,
        gap: Gaps.g25,
        paddingHorizontal: 20,
    },
})
