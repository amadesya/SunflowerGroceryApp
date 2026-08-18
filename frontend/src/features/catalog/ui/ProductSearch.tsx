import { Colors, FontSizes, Radius } from '@/shared/theme';
import { Search, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Platform, TextInput, TouchableOpacity, View } from 'react-native';

export function ProductSearch() {
    const [searchText, setSearchText] = useState('');

    const handleClearInput = () => {
        setSearchText('');
    };

    return (
        <View style={styles.searchContainer}>
            <Search
                color={Colors.brown}
                size={18}
            />
            <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Поиск..."
                placeholderTextColor={Colors.brown}
                style={styles.searchInput}
            />

            {searchText.length > 0 && (
                <TouchableOpacity onPress={handleClearInput}>
                    <X color={Colors.brown} size={18} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        borderRadius: Radius.r25,
        ...(Platform.OS === 'web'
            ? { boxShadow: '0 2px 6px rgba(0,0,0,0.6)' }
            : { shadowColor: Colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 6, elevation: 2 }
        ),
    },
    searchInput: {
        flex: 1,
        fontSize: FontSizes.f16,
        color: Colors.brown,
        paddingVertical: 0
    },
    searchIcon: {
        color: Colors.brown,
        fontSize: 16
    }
});
