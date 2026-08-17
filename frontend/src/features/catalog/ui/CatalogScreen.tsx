import { Colors, Gaps } from '@/shared/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryList } from './CategoryList';
import { ProductList } from './ProductList';
import { ProductSearch } from './ProductSearch';

export function CatalogScreen() {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <View style={styles.wrapper}>
                <ProductList
                    title="Список продуктов"
                    ListHeaderComponent={
                        <>
                            <ProductSearch />
                            <CategoryList />
                        </>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.beige,
    },
    wrapper: {
        flex: 1,
        gap: Gaps.g25,
        paddingHorizontal: 20,
        // paddingTop: 10
    },
});
