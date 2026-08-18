import { Colors, FontSizes, Gaps } from "@/shared/theme";
import { Button, ErrorNotification, Input } from "@/shared/ui";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function LoginScreen() {
    const [error, setError] = useState<string | undefined>();
    const alert = () => {
        setError('Неверный логин или пароль');
        setTimeout(() => {
            setError(undefined);
        }, 4000);
    }

    const handleGuestLogin = () => {
        router.replace('/(tabs)/products');
    };

    return (
        <View style={styles.container}>
            <ErrorNotification error={error} />
            <View style={styles.content}>
                <Image
                    source={require('../../../../assets/images/sunflower.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.header}>Вход</Text>
                <View style={styles.form}>
                    <Input placeholder="Введите email" />
                    <Input isPassword placeholder="Введите пароль"/>
                    <Link href={'/restore'}>
                        <Text>Забыли пароль?</Text>
                    </Link>
                    <Button title="Войти" onPress={alert} />
                    <Button title="Регистрация"/>
                    <Button title="Войти как гость" onPress={handleGuestLogin} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'stretch',
        flex: 1,
        padding: 55,
        backgroundColor: Colors.beige
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    content: {
        alignItems: 'center',
        gap: Gaps.g25
    },
    form: {
        alignSelf: 'stretch',
        gap: Gaps.g16
    },
    header:{
        fontSize: FontSizes.f24,
        fontWeight: 'bold',
        color: Colors.brown
    }
});
