import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export function RestoreScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Восстановить пароль' }} />
            <Link href={'/login'}>
                <Text>Восстановить</Text>
            </Link>
        </View>
    );
}
