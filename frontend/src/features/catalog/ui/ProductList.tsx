import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { products } from '@/entities/product/model/types';
import { Colors, FontSizes } from '@/shared/theme';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    title?: string;
    ListHeaderComponent?: React.ReactElement | null;
    extraBottomPadding?: number;
}

const ESTIMATED_FLOATING_TAB_BAR_HEIGHT = 80;

export function ProductList({
    title,
    ListHeaderComponent,
    extraBottomPadding = 24,
}: ProductListProps) {
    const insets = useSafeAreaInsets();

    const tabBarHeight = useBottomTabBarHeight();
    
    const paddingBottom = useMemo(() => {
        const baseHeight = Math.max(tabBarHeight, ESTIMATED_FLOATING_TAB_BAR_HEIGHT);
        return baseHeight + insets.bottom + extraBottomPadding;
    }, [tabBarHeight, insets.bottom, extraBottomPadding]);

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={products}
                ListHeaderComponent={
                    ListHeaderComponent ?? (
                        <Text style={styles.header}>{title ?? 'Список продуктов'}</Text>
                    )
                }
                renderItem={({ item }) => {
                    if ('empty' in item) {
                        return <View style={styles.emptyCard} />;
                    }
                    return <ProductCard product={item} />;
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={[
                    styles.listContent,
                    { paddingBottom },
                ]}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.beige,
    },
    header: {
        fontSize: FontSizes.f24,
        fontWeight: 'bold',
        color: Colors.brown,
        marginBottom: 16,
    },
    columnWrapper: {
        gap: 4,
    },
    listContent: {
        gap: 4,
        paddingHorizontal: 12,
    },
    emptyCard: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});