import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { recipes } from '@/entities/recipe/model/types';
import { Colors, Radius } from '@/shared/theme';
import { RecipeCard } from './RecipeCard';

interface RecipeListProps {
    extraBottomPadding?: number;
}

const ESTIMATED_FLOATING_TAB_BAR_HEIGHT = 80;

export function RecipeList({ extraBottomPadding = 24 }: RecipeListProps) {
    const insets = useSafeAreaInsets();

    const tabBarHeight = useBottomTabBarHeight();

    const paddingBottom = useMemo(() => {
        const baseHeight = Math.max(tabBarHeight, ESTIMATED_FLOATING_TAB_BAR_HEIGHT);
        return baseHeight + insets.bottom + extraBottomPadding;
    }, [tabBarHeight, insets.bottom, extraBottomPadding]);

    return (
        <FlatList
            data={recipes}
            contentContainerStyle={[
                styles.categoryContainer,
                { paddingBottom },
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.8}>
                    <RecipeCard recipe={item} />
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        gap: 4,
    },
    card: {
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: Radius.r25,
        marginRight: 10,
    },
    cardText: {
        fontSize: 14,
        color: Colors.brown,
    },
});