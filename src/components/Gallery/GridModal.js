import { Image, Linking, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { IMAGE_API_BASE_URL } from '../../utils/api/apiEndpoints';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils/constants';
import { getAuth } from '../../redux/slice/authSlice';
import { useSelector } from 'react-redux';

const GridModal = ({ modalVisible, closeModal, selectedItem, openDeleteModal }) => {
    const user = useSelector(getAuth);

    const navigation = useNavigation();

    const handleEdit = () => {
        closeModal('MODAL');
        navigation.navigate(ROUTES.NEW_EVENT_TAB, { ...selectedItem, newEvent: false });
    };

    const handleDelete = () => {
        openDeleteModal(selectedItem?.eventId);
        closeModal('MODAL');
    };

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => closeModal('MODAL')}
        >
            <View style={styles.modalBackground}>
                <View style={styles.actionContainer}>
                    <View style={styles.action}>
                        {user?.username === selectedItem?.username && <>
                            <TouchableOpacity onPress={handleEdit}>
                                <FeatherIcon name="edit" color={'white'} size={24} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleDelete}>
                                <AntDesignIcon name="delete" color={'white'} size={24} />
                            </TouchableOpacity>
                        </>
                        }

                        <TouchableOpacity onPress={() => Linking.openURL(selectedItem?.eventUrl)}>
                            <FeatherIcon name="youtube" color={'white'} size={28} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => closeModal('MODAL')} >
                        <Icon name="close" color={'white'} size={24} />
                    </TouchableOpacity>
                </View>

                <Image source={{ uri: IMAGE_API_BASE_URL.concat(selectedItem?.imagePath) }} style={styles.modalImage} />


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
