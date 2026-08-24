import { Product } from '@/entities/product';
import { AddToCartButton } from '@/features/cart';
import { Colors, Radius } from '@/shared/theme';
import { Chip } from '@/shared/ui';
import { Header } from '@/shared/ui/Header';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const placeholderImage = require('../../../../assets/images/products/images.webp');

function resolveImageSource(image?: string): number | { uri: string } {
    if (
        typeof image === 'string' &&
        image.trim().toLowerCase().startsWith('http')
    ) {
        return { uri: image.trim() };
    }
    return placeholderImage;
}

interface IProductCard {
    product: Product;
}

export function ProductCard({ product }: IProductCard) {
    return (
        <View style={styles.card} testID={`product-card-${product.id}`}>
            <Image
                source={resolveImageSource(product.image)}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.header}>
                <Header text={product.name} />
                <Chip text={`${product.price}₽`} />
            </View>
            <View style={styles.footer}>
                <AddToCartButton product={product} />
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
        borderColor: Colors.yellow,
    },
    image: {
        width: '100%',
        height: 160,
    },
    header: {
        flex: 1, 
        padding: 8,
        gap: 6,
    },
    footer: {
        padding: 8,
    },
});