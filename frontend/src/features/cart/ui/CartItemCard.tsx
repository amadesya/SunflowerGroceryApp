import type { CartItem } from '@/entities/cart';
import { addToCart, decreaseQuantity, removeFromCart } from '@/entities/cart';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Colors, FontSizes, Radius } from '@/shared/theme';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { formatPrice } from '../lib/formatPrice';

const placeholderImage = require('../../../../assets/images/products/images.webp');

const IMAGE_SIZE = 72;

function resolveImageSource(image?: string): number | { uri: string } {
    if (
        typeof image === 'string' &&
        image.trim().toLowerCase().startsWith('http')
    ) {
        return { uri: image.trim() };
    }
    return placeholderImage;
}

interface CartItemCardProps {
    item: CartItem;
}

export const CartItemCard = React.memo<CartItemCardProps>(
    function CartItemCard({ item }) {
        const dispatch = useAppDispatch();
        const { product, quantity, price } = item;

        return (
            <View style={styles.card} testID={`cart-item-card-${product.id}`}>
                <Image
                    source={resolveImageSource(product.image)}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.name} numberOfLines={2}>
                        {product.name}
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        {formatPrice(price)} × {quantity} ={' '}
                        {formatPrice(price * quantity)}
                    </Text>
                    <View style={styles.controls}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.controlButton,
                                pressed && styles.controlButtonPressed,
                            ]}
                            onPress={() =>
                                dispatch(
                                    decreaseQuantity({ productId: product.id }),
                                )
                            }
                            hitSlop={8}
                            accessibilityLabel="Уменьшить количество"
                        >
                            <Text style={styles.controlText}>−</Text>
                        </Pressable>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Pressable
                            style={({ pressed }) => [
                                styles.controlButton,
                                pressed && styles.controlButtonPressed,
                            ]}
                            onPress={() =>
                                dispatch(addToCart({ product }))
                            }
                            hitSlop={8}
                            accessibilityLabel="Увеличить количество"
                        >
                            <Text style={styles.controlText}>+</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                styles.controlButton,
                                styles.removeButton,
                                pressed && styles.controlButtonPressed,
                            ]}
                            onPress={() =>
                                dispatch(
                                    removeFromCart({ productId: product.id }),
                                )
                            }
                            hitSlop={8}
                            accessibilityLabel="Удалить из корзины"
                        >
                            <Text style={styles.removeText}>✕</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    },
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        gap: 12,
        padding: 12,
        borderRadius: Radius.r16,
        backgroundColor: Colors.white,
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: Radius.r16,
        backgroundColor: Colors.beige,
    },
    info: {
        flex: 1,
        gap: 6,
    },
    name: {
        fontSize: FontSizes.f16,
        fontWeight: 'bold',
        color: Colors.brown,
    },
    price: {
        fontSize: FontSizes.f16,
        color: Colors.link,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 'auto',
    },
    controlButton: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Radius.r16,
        backgroundColor: Colors.beige,
    },
    controlButtonPressed: {
        opacity: 0.7,
    },
    removeButton: {
        marginLeft: 'auto',
        backgroundColor: Colors.primary,
    },
    controlText: {
        fontSize: FontSizes.f18,
        fontWeight: 'bold',
        color: Colors.brown,
    },
    quantity: {
        minWidth: 24,
        textAlign: 'center',
        fontSize: FontSizes.f18,
        fontWeight: 'bold',
        color: Colors.brown,
    },
    removeText: {
        fontSize: FontSizes.f16,
        fontWeight: 'bold',
        color: Colors.white,
    },
});
