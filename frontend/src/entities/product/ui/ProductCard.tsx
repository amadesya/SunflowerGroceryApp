import { Colors, Radius } from "@/shared/theme";
import { Button, Chip } from "@/shared/ui";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { Product } from "../model/types";

export function ProductCard({ product }: { product: Product }) {
    return (
        <View style={styles.card}>
            <SvgUri
                uri={product.image ?? 'https://via.placeholder.com/150'}
                style={styles.image}
                height={200}
                width="100%"
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
                <Button title="Добавить в корзину" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: Radius.r16,
        backgroundColor: Colors.white,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
    },
    title: {},
    chips: {},
    header: {
        padding: 8,
        gap: 6,
    },
    footer: {
        padding: 8,
    }
});
