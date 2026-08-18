import { Colors, Radius } from "@/shared/theme";
import { Button, Chip } from "@/shared/ui";
import { Header } from "@/shared/ui/Header";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Recipe } from "../../../entities/recipe/model/types";
import { CalorieLabel } from "./CalorieLabel";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <View style={styles.body}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: recipe.image}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Header text={recipe.name}/>
                </View>
                <View>
                    <CalorieLabel text={String(recipe.calories) + " ккал"} />
                </View>  
                <View>
                    <CalorieLabel text={`Б: ${recipe.proteins} г • Ж: ${recipe.fats} г • У: ${recipe.carbs} г`} />
                </View>  
                <View style={styles.footer}>
                    <Chip text={String(recipe.price) + " ₽/рецепт"} />
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