import { Colors, Radius } from "@/shared/theme";
import React, { useRef } from "react";
import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet, Text } from "react-native";

export function Button({ title, ...props }: PressableProps & { title: string }) {
    const animatedValue = useRef(new Animated.Value(100)).current;

    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary],
    });

    const fadeIn = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false,
        }).start();
        props.onPressIn?.(e);
    };

    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: false,
        }).start();
        props.onPressOut?.(e);
    };

    return (
        <Pressable
            {...props}
            onPressIn={fadeIn}
            onPressOut={fadeOut}
            style={styles.pressable}
        >
            <Animated.View
                pointerEvents="none"
                style={[styles.buttonContent, { backgroundColor: color }]}
            >
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressable: {
        borderRadius: Radius.r25,
        overflow: "hidden",
    },
    buttonContent: {
        justifyContent: "center",
        alignItems: "center",
        height: 58,
        borderRadius: Radius.r25,
    },
    text: {
        color: Colors.white,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Inter-Bold",
    },
});
