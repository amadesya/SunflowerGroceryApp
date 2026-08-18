import { recipes } from "@/entities/recipe/model/types";
import { Colors, Radius } from '@/shared/theme';
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { RecipeCard } from "./RecipeCard";

export function RecipeList() {
    return (
        <FlatList
            data={recipes}
            contentContainerStyle={styles.categoryContainer}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <RecipeCard recipe={item}/>
                </TouchableOpacity>)}
        />
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        gap: 4
    },
    card: {
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: Radius.r25,
        marginRight: 10
    },
    cardText: {
        fontSize: 14,
        color: Colors.brown
    }
})