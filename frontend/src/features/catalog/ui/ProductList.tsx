import { Product, ProductCard } from '@/entities/product';
import { Colors, FontSizes } from '@/shared/theme';
import type { AxiosResponse } from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getProducts } from '../api/productsApi';

type ListItem = Product | { id: string; empty: true };

interface ProductListProps {
    title?: string;
    ListHeaderComponent?: React.ReactElement | null;
}

export function ProductList({ title, ListHeaderComponent }: ProductListProps) {
    const { top } = useSafeAreaInsets();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getProducts()
            .then((response: AxiosResponse<Product[]>) => {
                setProducts(response.data);
            })
            .catch((err: unknown) => {
                console.error('Error fetching products:', err);
                setError('Failed to load products.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const formattedData = useMemo<ListItem[]>(() => {
        if (!products.length) return [];
        if (products.length % 2 !== 0) {
            return [...products, { id: 'EMPTY_PLACEHOLDER', empty: true }];
        }
        return products;
    }, [products]);

    if (isLoading) {
        return (
            <View style={[styles.wrapper, styles.center]}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.wrapper, styles.center]}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={formattedData}
                ListHeaderComponent={ListHeaderComponent ?? <Text style={styles.header}>{title ?? 'Список продуктов'}</Text>}
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
                    {
                        paddingBottom: 100,
                    },
                ]}
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
    center: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    columnWrapper: {
        gap: 12,
    },
    listContent: {
        gap: 12,
        paddingHorizontal: 12,
    },
    emptyCard: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
    },
});
