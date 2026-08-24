import { addToCart } from '@/entities/cart';
import { Product } from '@/entities/product';
import { Colors, Radius } from '@/shared/theme';
import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { useAppDispatch } from '@/hooks/useAppDispatch';

interface IAddToCartButton {
    product: Product;
}

export const AddToCartButton: FC<IAddToCartButton> = ({ product }) => {
    const dispatch = useAppDispatch();

    const onPress = () => dispatch(addToCart({ product }));

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]}
            onPress={onPress}
            android_ripple={{ color: Colors.primaryHover }}
        >
            <Text style={styles.text}>В корзину</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: Radius.r16,
        backgroundColor: Colors.orange,
    },
    buttonPressed: {
        backgroundColor: Colors.primaryHover,
        opacity: 0.85,
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
    },
});
