
import { Colors } from '@/shared/tokens';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.brown
      }}
    >
      <Tabs.Screen
        name="recipes/index"
        options={{
          title: 'Рецепты',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pot-mix-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="products/index"
        options={{
          title: 'Каталог',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid-large" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart/index"
        options={{
          title: 'Корзина',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Выход',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="exit-to-app" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}