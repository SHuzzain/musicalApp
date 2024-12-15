import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/Input/SearchBox';
import MasonryGrid from '../../components/Gallery/MasonryGrid';
import { StyleSheet, Text, View } from 'react-native';
import eventApi from '../../utils/api/EventApi';

const GalleryScreen = ({ route }) => {
    const { params } = route;

    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        fetchEvents();
        return () => setGalleryData([]);
    }, [params?.reload]);

    const handleFilter = (value) => {
        fetchEvents(value);
    };

    const fetchEvents = async (value) => {
        const response = await eventApi.get(value);
        console.log({ response }, 'ss');
        if (response?.length) {
            setGalleryData(response);
        } else {
            setGalleryData([]);
        }
    };

    return (
        <View style={styles.container}>
            <SearchBox handleFilter={handleFilter} />
            {galleryData.length ? <MasonryGrid data={galleryData} /> : <Text>No Record</Text>}
        </View>

    );
};

export default GalleryScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingBottom: 40,
    },
});

