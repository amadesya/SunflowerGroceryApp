import { Colors, FontSizes } from "@/shared/theme";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, useWindowDimensions } from "react-native";

export interface ErrorNotificationProps {
  error?: string;
}

export function ErrorNotification({ error }: ErrorNotificationProps ){
        const [isShown, setIsShown] = useState<boolean>(false);
        const animatedValue = useRef(new Animated.Value(-100)).current;
        const { width } = useWindowDimensions();

        const onEnter = () => {
            animatedValue.setValue(-100);
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start()
        }

        useEffect(() => {
            if (!error) {
                return;
            }
            setIsShown(true);
            
            const timerId = setTimeout(() => {
                setIsShown(false);
            }, 3000);
            return () => {
                clearTimeout(timerId);
            }
        }, [error])
        
        if (!isShown) {
            return <></>
        }

        return (
        <Animated.View style={[styles.error, { width }, {
            transform: [
                {translateY: animatedValue}
            ]}]}
            onLayout={onEnter}>
            <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
        );
        

}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: Colors.red,
        padding: 15,
        zIndex: 1000,
    },
    errorText: {
        color: Colors.white,
        fontSize: FontSizes.f16,
        textAlign: 'center',
        fontFamily: 'Inter-Regular'
    }
})
