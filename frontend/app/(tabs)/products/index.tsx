import { getProducts } from '@/entities/auth/api/productsApi';
import { ProductCard } from '@/entities/products/ui/ProductCard/ProductCard';
import { Gaps } from "@/shared/tokens";
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';

export default function Product() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProducts()
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error fetching products:", error))
    }, []);

    return (
        <ScrollView style={styles.wrapper}>
            <FlatList
                data={product}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'column',
        gap: Gaps.g25,
        padding: 20
    }
})