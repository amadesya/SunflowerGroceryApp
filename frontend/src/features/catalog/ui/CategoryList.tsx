import { categories } from "@/entities/category/category";
import { Colors, Radius } from '@/shared/theme';
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

export function CategoryList(){
    return(
        <FlatList
        style={styles.list} 
        horizontal 
        data={categories}
        contentContainerStyle={styles.categoryContainer}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>)}
        />
    )
}

const styles = StyleSheet.create({
    list:{
        flexGrow: 0,
        paddingVertical: 10
    },
    categoryContainer:{
        // paddingHorizontal: 16,
        marginVertical: 12,
        alignItems: 'center'
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