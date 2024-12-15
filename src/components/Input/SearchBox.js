import React, { useEffect, useState } from 'react';
import { View, TextInput, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../styles/color';
import authApi from '../../utils/api/AuthApi';
import { useForm } from 'react-hook-form';

const SearchBox = ({ handleFilter }) => {
    const form = useForm();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selected, setSelected] = useState('');

    const [users, setUsers] = useState([])

    const [openStartDate, setOpenStartDate] = useState(false);
    const [openEndDate, setOpenEndDate] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchUSers();
        return () => setUsers([]);
    }, []);

    const fetchUSers = async () => {
        let response = await authApi.getAllUsers();
        if (response?.length) {
            response = response.map(dt => ({
                ...response,
                label: dt.username,
                value: dt.username,
            }));
            setUsers(response);
        }
    };

    const handleSearch = () => {
        handleFilter({ username: selected, startDate, endDate });
        toggleModal();
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const clearStartDate = () => setStartDate(null);
    const clearEndDate = () => setEndDate(null);

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === selected && (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
            </View>
        );
    };



    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <Ionic name="search" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#909090"
                    style={styles.input}
                />
                <TouchableOpacity onPress={toggleModal}>
                    <Ionic name="filter" size={24} color="#6e3cd3" />
                </TouchableOpacity>
            </View>



            {/* Filter Modal */}
            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Filter Options</Text>

                        {/* Filter Dropdown */}
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={users}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select..."
                            value={selected}
                            onChange={item => {
                                setSelected(item.value);
                            }}
                            renderItem={renderItem}
                        />

                        {/* Start Date Picker */}
                        <TouchableOpacity onPress={() => setOpenStartDate(true)} style={styles.dateButton}>
                            <Text style={styles.dateText}>{`Start Date: ${startDate ? startDate.toLocaleDateString() : 'YYYY/MM/DD'}`}</Text>
                            {startDate && (
                                <TouchableOpacity onPress={clearStartDate} style={styles.clearIcon}>
                                    <Ionic name="close-circle" size={20} color={'#333'} />
                                </TouchableOpacity>
                            )}
                        </TouchableOpacity>

                        {/* End Date Picker */}
                        <TouchableOpacity onPress={() => setOpenEndDate(true)} style={styles.dateButton}>
                            <Text style={styles.dateText}>{`End Date: ${endDate ? endDate.toLocaleDateString() : 'YYYY/MM/DD'}`}</Text>
                            {endDate && (
                                <TouchableOpacity onPress={clearEndDate} style={styles.clearIcon}>
                                    <Ionic name="close-circle" size={20} color={'#333'} />
                                </TouchableOpacity>
                            )}
                        </TouchableOpacity>

                        {/* Start Date Modal */}
                        {openStartDate &&
                            <DatePicker
                                modal
                                open={openStartDate}
                                date={startDate ?? new Date()}
                                mode="date"
                                onConfirm={(date) => {
                                    setStartDate(date);
                                    setOpenStartDate(false);
                                }}
                                onCancel={() => setOpenStartDate(false)}
                            />
                        }

                        {/* End Date Modal */}
                        {openEndDate &&
                            <DatePicker
                                modal
                                open={openEndDate}
                                date={endDate ?? new Date()}
                                mode="date"
                                onConfirm={(date) => {
                                    setEndDate(date);
                                    setOpenEndDate(false);
                                }}
                                onCancel={() => setOpenEndDate(false)}
                            />
                        }

                        {/* Close Modal Button */}
                        <View style={styles.footerModal}>
                            <TouchableOpacity onPress={toggleModal} style={styles.closeModalButton}>
                                <Text style={styles.closeModalButtonText}>Close</Text>
                            </TouchableOpacity>

                            {/* Search Button */}
                            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                                <Text style={styles.searchButtonText}>Search</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    searchBox: {
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        fontSize: 14,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        fontSize: 18,
        opacity: 0.7,
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        fontSize: 15,
        padding: 10,
        paddingLeft: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    dropdownButton: {
        width: '100%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
    },
    dropdownButtonText: {
        fontSize: 15,
        color: '#000',
    },
    dateButton: {
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginVertical: 10,
    },
    dateText: {
        fontSize: 15,
        color: '#000',
    },
    footerModal: {
        flexDirection: 'row',
        gap: 8,
    },
    closeModalButton: {
        backgroundColor: colors.secondary,
        borderRadius: 4,
        alignItems: 'center',
        paddingVertical: 12,
        width: 70,

        paddingHorizontal: 2,
        marginTop: 20,
    },
    closeModalButtonText: {
        color: '#333',
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: colors.primary,
        borderRadius: 4,
        alignItems: 'center',
        paddingVertical: 12,
        width: 70,
        paddingHorizontal: 2,
        marginTop: 20,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    clearIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    dropdown: {
        width: '100%',
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
