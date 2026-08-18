import { CustomTabBar, type DataItem } from '@/shared/ui';
import { Tabs } from 'expo-router';
import React from 'react';

const tabsData: DataItem[] = [
  { label: 'Главная', route: '/(tabs)/products', name: 'House' },
  { label: 'Рецепты', route: '/(tabs)/recipes', name: 'CookingPot' },
  { label: 'Корзина', route: '/(tabs)/cart', name: 'ShoppingCart' },
  { label: 'Профиль', route: '/(tabs)/profile', name: 'User' },
];

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={() => <CustomTabBar data={tabsData} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Tabs.Screen
        name="products/index"
        options={{ title: 'Главная' }}
      />
      <Tabs.Screen
        name="recipes/index"
        options={{ title: 'Рецепты' }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{ title: 'Корзина' }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: 'Профиль' }}
      />
    </Tabs>
  );
}
