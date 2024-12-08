import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GridModal from './GridModal';


const MasonryGrid = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const grid = [
    'https://png.pngtree.com/thumb_back/fw800/background/20240810/pngtree-anime-boy-lofi-cloud-sunset-image_16124755.jpg',
    'https://i.pinimg.com/236x/62/48/03/624803bee204bc2b7761449dcc502821.jpg',
    'https://i.pinimg.com/236x/c7/58/7e/c7587eec8e58a3eb06f5931d51f6e436.jpg',
    'https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg',
    'https://howtodrawforkids.com/wp-content/uploads/2022/05/9-anime-face-lesson.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240810/pngtree-anime-boy-lofi-cloud-sunset-image_16124755.jpg',
    'https://i.pinimg.com/236x/c7/58/7e/c7587eec8e58a3eb06f5931d51f6e436.jpg',
    'https://i.pinimg.com/236x/c7/58/7e/c7587eec8e58a3eb06f5931d51f6e436.jpg',
    'https://i.pinimg.com/236x/c7/58/7e/c7587eec8e58a3eb06f5931d51f6e436.jpg',
    'https://i.pinimg.com/236x/62/48/03/624803bee204bc2b7761449dcc502821.jpg',
    'https://cdn.magicdecor.in/com/2023/10/20174720/Anime-Scenery-Wallpaper-for-Walls-710x488.jpg',
    'https://cdn.magicdecor.in/com/2023/10/20174720/Anime-Scenery-Wallpaper-for-Walls-710x488.jpg',
    'https://i.pinimg.com/236x/62/48/03/624803bee204bc2b7761449dcc502821.jpg',
    'https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg',
    'https://howtodrawforkids.com/wp-content/uploads/2022/05/9-anime-face-lesson.jpg',
  ];


  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  const Item = ({ src }) => (
    <TouchableOpacity onPress={() => handleImagePress(src)} style={styles.imageContainer}>
      <Image source={{ uri: src }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={grid}
        numColumns={2} // Defines the number of columns
        renderItem={({ item }) => <Item src={item} />}
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        contentContainerStyle={styles.container} // Optional styling for FlatList content
      />
      {selectedImage &&
        <GridModal closeModal={closeModal} modalVisible={modalVisible} selectedImage={selectedImage} />
      }
    </>
  );
};

export default MasonryGrid;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
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
