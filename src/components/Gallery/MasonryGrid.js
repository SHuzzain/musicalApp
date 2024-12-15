import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GridModal from './GridModal';
import CardItem from './CardItem';
import EventDeleteModal from './EventDeleteModal';


const MasonryGrid = ({ data }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    open: false,
    eventId: null,
  });
  const [selectedItem, setSelectedItem] = useState(null);



  const handleImagePress = (values) => {
    setSelectedItem(values);
    setModalVisible(true);
  };

  const closeModal = (type) => {
    switch (type) {
      case 'MODAL':
        setSelectedItem(null);
        setModalVisible(false);
        break;
      case 'DELETE':
        setDeleteModal({ open: false, eventId: null });
        break;
      default:
        break;
    }

  };

  const openDeleteModal = (eventId) => {
    setDeleteModal({
      open: true,
      eventId,
    });
  };


  return (
    <>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <CardItem handleImagePress={handleImagePress} item={item} />}
        keyExtractor={(item) => item.eventId}
        contentContainerStyle={styles.container}
      />
      {selectedItem &&
        <GridModal closeModal={closeModal} openDeleteModal={openDeleteModal} modalVisible={modalVisible} selectedItem={selectedItem} />
      }

      <EventDeleteModal eventId={deleteModal.eventId} isOpen={deleteModal.open} closeModal={closeModal} />

    </>
  );
};

export default MasonryGrid;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
