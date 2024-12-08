import { Text, StyleSheet, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { colors } from '../../styles/color';
import CustomInput from '../../components/Input/CustomInput';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const EventScreen = () => {
    const [imageData, setImageData] = useState(null);
    const form = useForm();
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.error('ImagePicker Error: ', response.errorMessage);
            } else {
                const asset = response.assets?.[0];
                if (asset) {
                    setImageData(asset); // Save the image data
                }
            }
        });
    };

    return (
        <ScrollView style={styles.container}>
            {imageData ?
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: imageData.uri }}
                    />
                    <Icon name="close-circle" style={styles.close} size={30} color={colors.primary} onPress={() => setImageData(null)} />
                </View>
                :
                <TouchableOpacity activeOpacity={0.8} style={styles.imageUpload} onPress={pickImage}>
                    <Icon name="add-circle-outline" size={36} />
                    <Text>
                        Upload Image
                    </Text>
                </TouchableOpacity>
            }
            <FormProvider {...form}>
                <View style={styles.inputWrapper}>
                    <CustomInput name={'eventName'} text={'Title'} required />
                    <CustomInput name={'eventUrl'} text={'Youtube Url'} required />

                    <Text style={styles.label}>Date</Text>
                    <Controller
                        control={form.control}
                        render={({ field: { onChange, value } }) => (
                            <>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => setOpen(true)}
                                    style={styles.input}
                                >
                                    <Text>
                                        {moment(value).format('YYYY/MM/DD')}
                                    </Text>
                                </TouchableOpacity>

                                <DatePicker
                                    modal
                                    open={open}
                                    date={date}
                                    mode="date"
                                    onConfirm={(selectedDate) => {
                                        setOpen(false);
                                        onChange(selectedDate);
                                    }}
                                    onCancel={() => setOpen(false)}
                                />
                            </>
                        )}
                        name={'eventDate'}
                        rules={{ required: true }}
                    />


                </View>
            </FormProvider>
        </ScrollView>
    );
};

export default EventScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        gap: 40,
    },
    imageUpload: {
        borderColor: 'gray',
        height: 200,
        width: '100%',
        borderWidth: 2,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderColor: 'gray',
        borderWidth: 2,
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    inputWrapper: {
        gap: 10,
        marginTop: 10,
    },

    label: {
        color: '#616163',
        marginHorizontal: 10,
        marginLeft: 0,
        fontWeight: 'semibold',
    },
    input: {
        borderWidth: 1.8,
        borderColor: '#cccccc',
        height: 40,
        padding: 10,
        borderRadius: 8,
    },
});
