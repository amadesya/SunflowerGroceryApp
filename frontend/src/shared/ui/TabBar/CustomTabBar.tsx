import { Colors, Radius } from '@/shared/theme';
import { useRouter } from 'expo-router';
import * as Icons from 'lucide-react-native';
import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type IconName = keyof typeof Icons;

type IconProps = {
    name: IconName;
    color: string;
    size?: number;
};

function Icon({ name, color, size = 24 }: IconProps) {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return null;
    return <IconComponent color={color} size={size} />;
}

export type DataItem = {
    label: string;
    route: string;
    name: IconName;
};

type CustomTabBarProps = {
    data: DataItem[];
    onChange?: (index: number) => void;
};

export function CustomTabBar({ data, onChange }: CustomTabBarProps) {
    const { bottom } = useSafeAreaInsets();
    const { width } = Dimensions.get('window');
    const [selectedItem, setSelectedItem] = useState(0);
    const router = useRouter();

    const handlePress = (item: DataItem, index: number) => {
        setSelectedItem(index);
        onChange?.(index);
        router.navigate(item.route as any);
    };

    return (
        <View
            style={[
                styles.wrapper,
                {
                    bottom: bottom > 0 ? bottom : 16,
                    paddingHorizontal: width * 0.06,
                },
            ]}
            pointerEvents="box-none"
        >
            <View style={styles.container}>
                {data.map((item, index) => {
                    const isSelected = selectedItem === index;

                    return (
                        <Animated.View key={item.route || index} style={styles.itemView}>
                            <Pressable
                                onPress={() => handlePress(item, index)}
                                android_ripple={{ color: 'transparent' }}
                                style={styles.itemButton}
                            >
                                <Icon name={item.name} color={isSelected ? Colors.orange : Colors.brown} />

                                {isSelected && (
                                    <Animated.Text
                                        style={[styles.text, { color: isSelected ? Colors.orange : Colors.brown }]}
                                        entering={FadeInRight.springify().damping(80).stiffness(200)}
                                        exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                                    >
                                        {item.label}
                                    </Animated.Text>
                                )}
                            </Pressable>
                        </Animated.View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 100,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: Radius.r16,
        paddingVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    itemView: {
        overflow: 'hidden',
    },
    itemButton: {
        borderRadius: Radius.r16,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 6,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
});
