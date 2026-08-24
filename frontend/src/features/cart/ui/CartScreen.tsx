import { Colors, FontSizes, Gaps, Radius } from '@/shared/theme';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

import { formatPrice } from '../lib/formatPrice';
import { CartItemCard } from './CartItemCard';

const FLOATING_TAB_BAR_OFFSET = 96;

export function CartScreen() {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector(
        (state: RootState) => state.cart.totalAmount,
    );
    const totalCount = useSelector(
        (state: RootState) => state.cart.totalCount,
    );
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.wrapper, { paddingTop: insets.top }]}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.product.id}
                renderItem={({ item }) => <CartItemCard item={item} />}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyTitle}>Корзина пуста</Text>
                        <Text style={styles.emptySubtitle}>
                            Добавьте товары из каталога
                        </Text>
                    </View>
                }
            />
            {items.length > 0 && (
                <View
                    style={[
                        styles.summary,
                        { marginBottom: insets.bottom + FLOATING_TAB_BAR_OFFSET },
                    ]}
                >
                    <Text style={styles.summaryCount}>
                        Позиций: {totalCount}
                    </Text>
                    <Text style={styles.summaryTotal}>
                        Итого: {formatPrice(totalAmount)}
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 20,
    },
    listContent: {
        gap: Gaps.g25,
        paddingBottom: Gaps.g16,
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Gaps.g16,
        paddingTop: Gaps.g16,
        paddingBottom: Gaps.g16,
        paddingHorizontal: Gaps.g25,
        borderRadius: Radius.r25,
        backgroundColor: Colors.white,
    },
    summaryCount: {
        fontSize: FontSizes.f16,
        color: Colors.brown,
    },
    summaryTotal: {
        fontSize: FontSizes.f24,
        fontWeight: 'bold',
        color: Colors.brown,
    },
    empty: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        gap: 8,
    },
    emptyTitle: {
        fontSize: FontSizes.f24,
        fontWeight: 'bold',
        color: Colors.brown,
    },
    emptySubtitle: {
        fontSize: FontSizes.f16,
        color: Colors.link,
    },
});
