import { Image, Linking, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const GridModal = ({ modalVisible, closeModal, selectedImage }) => {
    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={closeModal}
        >
            <View style={styles.modalBackground}>
                <View style={styles.actionContainer}>
                    <View style={styles.action}>
                        <TouchableOpacity>
                            <FeatherIcon name="edit" color={'white'} size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/7u5AoFTgQTs?si=tbL9Fv2QdR9edgm1')}>
                            <FeatherIcon name="youtube" color={'white'} size={28} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={closeModal} >
                        <Icon name="close" color={'white'} size={24} />
                    </TouchableOpacity>
                </View>

                <Image source={{ uri: selectedImage }} style={styles.modalImage} />


            </View>
        </Modal>
    );
};

export default GridModal;

const styles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: '90%',
        height: '70%',
        resizeMode: 'contain',
    },

    actionContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        paddingHorizontal: 20,

    },
    action: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
    },
});
