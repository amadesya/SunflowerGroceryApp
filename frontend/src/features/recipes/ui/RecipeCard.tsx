import { Colors, Radius } from "@/shared/theme";
import { Button, Chip } from "@/shared/ui";
import { Header } from "@/shared/ui/Header";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Recipe } from "../../../entities/recipe/model/types";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Image
                    source={{ uri: recipe.image}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.header}>
                <View style={styles.chips}>
                    <Header text={recipe.name}/>
                </View>
                <View style={styles.chips}>
                    <Chip text={String(recipe.price) + "₽"} />
                </View>
                <View style={styles.chips}>
                    <Chip text={String(recipe.calories)} />
                </View>  
            </View>

            <View style={styles.footer}>
                <Button title="Добавить в корзину"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        borderRadius: Radius.r16,
        backgroundColor: Colors.white,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: Colors.yellow
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: Radius.r25
    },
    title: {},
    chips: {},
    header: {
        padding: 8,
        gap: 6,
    },
    footer: {
        padding: 8,
    },
});