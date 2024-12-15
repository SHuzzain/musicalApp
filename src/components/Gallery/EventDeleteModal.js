import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import eventApi from '../../utils/api/EventApi';
import { useNavigation } from '@react-navigation/native';

const EventDeleteModal = ({ eventId, closeModal, isOpen }) => {
    const navigation = useNavigation();
    const onDelete = async () => {
        try {
            await eventApi.delete(eventId);
            navigation.setParams({
                reload: Date.now(),
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Modal
            visible={isOpen}
            transparent={true}
            animationType="fade"
            onRequestClose={() => closeModal('DELETE')}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Delete Event</Text>
                    <Text style={styles.message}>
                        Are you sure you want to delete this event? This action cannot be undone.
                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => closeModal('DELETE')}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => {
                                onDelete();
                                closeModal('DELETE');
                            }}
                        >
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EventDeleteModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        marginRight: 10,
        paddingVertical: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#333',
    },
    deleteButton: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
        backgroundColor: '#e63946',
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        fontSize: 16,
        color: 'white',
    },
});
