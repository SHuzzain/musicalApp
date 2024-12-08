import React from 'react';
import SearchBox from '../../components/Input/SearchBox';
import MasonryGrid from '../../components/Gallery/MasonryGrid';
import { StyleSheet, View } from 'react-native';

const GalleryScreen = () => {

    return (
        <View style={styles.container}>
            <SearchBox />
            <MasonryGrid />
        </View>

    );
};

export default GalleryScreen;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40,
    },
});

