import { Button } from "@/shared/Button";
import { Chip } from "@/shared/Chip/Chip";
import { Colors, Radius } from "@/shared/tokens";
import { StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { Product } from "../../model/types";

export function ProductCard ({product}: { product: Product }) {
    return <View>
        <SvgUri
            uri={product.image}
            style = { styles.image }
            height = {200}
            width = "100%"
         />
         <View style={styles.header}>
            <View style={styles.chips}>
                <Chip text={product.name} />
            </View>
            <View style={styles.chips}>
                <Chip text={String(product.price)} />
            </View>
         </View>

         <View style={styles.footer}>
            <Button title="Добавить в корзину"/>
        </View>
    
    </View>
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        borderRadius: Radius.r16,
        backgroundColor: Colors.white
    },
    image: {

    },
    title: {},
    chips: {},
    header: {},
    footer: {}
})