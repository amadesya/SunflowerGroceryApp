import { Colors, Radius } from "@/shared/theme";
import { Button, Chip } from "@/shared/ui";
import { Header } from "@/shared/ui/Header";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Product } from "../model/types";

const placeholderImage = require('../../../../assets/images/products/images.webp');

export function ProductCard({ product }: { product: Product }) {
    return (
        <View style={styles.card}>
            <Image
                source={placeholderImage}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.header}>
                <View style={styles.chips}>
                    <Header text={product.name}/>
                </View>
                <View style={styles.chips}>
                    <Chip text={String(product.price) + "₽"} />
                </View>
            </View>

            <View style={styles.footer}>
                <Button title="Добавить в корзину"/>
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
        borderWidth: 2,
        borderColor: Colors.yellow
    },
    image: {
        width: '100%',
        height: 160,
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