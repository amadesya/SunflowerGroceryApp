import { Colors, Gaps } from "@/shared/theme";
import { Button } from "@/shared/ui";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from 'react-native';

export function ProfileScreen() {
    const hangleLogin = () => {
        router.push('/login' as any); 
    };

    return (
        <View style={styles.wrapper}>
            <Button
                title="Выйти"
                onPress={hangleLogin}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        gap: Gaps.g25,
        padding: 20,
        backgroundColor: Colors.beige, 
    },
});
