import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IMAGE_API_BASE_URL } from '../../utils/api/apiEndpoints';

const CardItem = ({ handleImagePress, item }) => {
    const { imagePath } = item;
    return (
        <TouchableOpacity onPress={() => handleImagePress(item)} style={styles.imageContainer}>
            <Image source={{ uri: IMAGE_API_BASE_URL.concat(imagePath) }} style={styles.image} />
        </TouchableOpacity>
    );
};

export default CardItem;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        margin: 5,
        height: 200, // Set appropriate height
        borderRadius: 8, // Optional: add rounded corners
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
