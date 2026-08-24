import { categories } from "@/entities/category/category";
import { Colors, Radius } from '@/shared/theme';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
                <View style={styles.cardContent}>
                    <Image source={{ uri: item.image }} style={styles.cardImage}/>
                    <Text style={styles.cardText}>{item.title}</Text>        
                </View>
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
        color: Colors.brown,
        fontWeight: 'bold'
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: Radius.r25,
        marginBottom: 8
    },
    cardContent:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})