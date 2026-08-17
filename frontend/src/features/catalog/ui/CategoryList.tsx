import { categories } from "@/entities/category/category";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

export function CategoryList(){
    return(
        <FlatList 
        horizontal 
        data={categories}
        contentContainerStyle={styles.categoryContainer}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
         <View>
            <Text>{item.title}</Text>
         </View>)}
        />
    )
}

const styles = StyleSheet.create({
    categoryContainer:{

    }
})