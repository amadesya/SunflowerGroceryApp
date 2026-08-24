import { Colors, Radius } from "@/shared/theme";
import { Button, Chip } from "@/shared/ui";
import { Header } from "@/shared/ui/Header";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Recipe } from "../../../entities/recipe/model/types";
import { CalorieLabel } from "./CalorieLabel";

const placeholderImage = require('../../../../assets/images/products/images.webp');

function resolveImageSource(image?: string | null): number | { uri: string } {
    if (typeof image === 'string') {
        const trimmed = image.trim();
        if (trimmed.length > 0) {
            return { uri: trimmed };
        }
    }
    return placeholderImage;
}

export function RecipeCard({ recipe }: { recipe?: Recipe | null }) {
    const safeRecipe = recipe ?? ({} as Partial<Recipe>);

    const name = safeRecipe.name ?? 'Рецепт';
    const calories = typeof safeRecipe.calories === 'number' && !Number.isNaN(safeRecipe.calories)
        ? safeRecipe.calories
        : 0;
    const proteins = safeRecipe.proteins ?? 0;
    const fats = safeRecipe.fats ?? 0;
    const carbs = safeRecipe.carbs ?? 0;
    const price = typeof safeRecipe.price === 'number' && !Number.isNaN(safeRecipe.price)
        ? safeRecipe.price
        : 0;

    return (
        <View style={styles.body}>
            <View style={styles.imageContainer}>
                <Image
                    source={resolveImageSource(safeRecipe.image)}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Header text={name}/>
                </View>
                <View>
                    <CalorieLabel text={String(calories) + " ккал"} />
                </View>  
                <View>
                    <CalorieLabel text={`Б: ${proteins} г • Ж: ${fats} г • У: ${carbs} г`} />
                </View>  
                <View style={styles.footer}>
                    <Chip text={String(price) + " ₽/рецепт"} />
                    <View style={styles.buttonView}>
                        <Button title="+" size="md"/>
                        <Button title="♡" size="md" />
                    </View>
                </View>
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
        borderColor: Colors.yellow,
        padding: 12,
        gap: 12
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: Radius.r25
    },
    title: {},
    imageContainer:{
    },
    infoContainer: {
    flex: 1,
    gap: 4
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        gap: 4
    },
});
