import { Colors, FontSizes, Radius } from "@/shared/theme";
import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { EyeClosedIcon } from "./icons/EyeClosed";
import { EyeOpenedIcon } from "./icons/EyeOpened";

export function Input({isPassword, ...props}: TextInputProps & { isPassword?: boolean}){
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

    return(
    <View>
        <TextInput
            style={styles.input}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholderTextColor={Colors.brown}
            {...props} />
        {isPassword && <Pressable onPress={() => setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>
                {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}    
        </Pressable>}
    </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 58,
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: Radius.r16,
        fontSize: FontSizes.f16,
        fontFamily: 'Inter-Regular',
        color: Colors.brown
    },
    eyeIcon:{
        position: 'absolute',
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 18
    }
})
