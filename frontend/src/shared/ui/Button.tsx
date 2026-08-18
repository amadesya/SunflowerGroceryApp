import { Colors, Radius } from "@/shared/theme";
import React, { useRef } from "react";
import {
    Animated,
    GestureResponderEvent,
    Pressable,
    PressableProps,
    StyleProp,
    StyleSheet,
    Text,
    ViewStyle,
} from "react-native";

interface ButtonProps extends PressableProps {
    title: string;
    size?: "sm" | "md" | "lg";
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

export function Button({
    title,
    size = "lg",
    onPress,
    onPressIn,
    onPressOut,
    style,
    disabled,
    ...props
}: ButtonProps) {
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
        onPressIn?.(e);
    };

    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: false,
        }).start();
        onPressOut?.(e);
    };

    return (
        <Pressable
            {...props}
            onPress={onPress}
            onPressIn={fadeIn}
            onPressOut={fadeOut}
            disabled={disabled}
            style={[styles.pressable, disabled && styles.disabled, style]}
        >
            <Animated.View
                style={[
                    styles.buttonContent,
                    styles[size],
                    { backgroundColor: color },
                ]}
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
    disabled: {
        opacity: 0.5,
    },
    buttonContent: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Radius.r25,
    },
    text: {
        color: Colors.white,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Inter-Bold",
    },
    sm: {
        height: 36,
        minWidth: 36,
        paddingHorizontal: 8,
    },
    md: {
        height: 46,
        paddingHorizontal: 16,
    },
    lg: {
        height: 58,
        alignSelf: "stretch",
    },
});