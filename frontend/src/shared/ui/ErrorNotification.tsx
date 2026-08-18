import { Colors, FontSizes } from "@/shared/theme";
import React, { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";

export interface ErrorNotificationProps {
  error?: string;
}

export function ErrorNotification({ error }: ErrorNotificationProps ){
        const [isShown, setIsShown] = useState<boolean>(false);
        const animatedValue = new Animated.Value(-100);

        const onEnter = () => {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
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
        <Animated.View style={{...styles.error, transform: [
            {translateY: animatedValue}
            ]}}
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
        width: Dimensions.get('window').width,
        backgroundColor: Colors.red,
        padding: 15,
    },
    errorText: {
        color: Colors.white,
        fontSize: FontSizes.f16,
        textAlign: 'center',
        fontFamily: 'Inter-Regular'
    }
})
