import { Text, StyleSheet, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { colors } from '../../styles/color';
import CustomInput from '../../components/Input/CustomInput';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Button from '../../components/Button/button';
import { useSelector } from 'react-redux';
import { getAuth } from '../../redux/slice/authSlice';
import eventApi from '../../utils/api/EventApi';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils/constants';
import { IMAGE_API_BASE_URL } from '../../utils/api/apiEndpoints';

const EventScreen = ({ route }) => {
    const { params } = route;
    const [open, setOpen] = useState(false);

    const user = useSelector(getAuth);
    const navigation = useNavigation();

    const form = useForm({
        defaultValues: {
            eventDate: new Date(),
        },
        shouldUnregister: false,
    });

    const eventInfo = useMemo(() => ({
        buttonText: params?.newEvent ? 'Create' : 'Update',
        isEdit: !params?.newEvent,
    }), [params]);

    console.log({ params });
    useEffect(() => {
        if (eventInfo?.isEdit) {
            Object.entries(params).forEach(([key, value]) => {
                if (key === 'eventDate') {
                    const dateObject = moment(value).toDate();
                    form.setValue(key, dateObject);
                } else if (key === 'imagePath') {
                    const img = {
                        uri: IMAGE_API_BASE_URL.concat(value),
                    };
                    form.setValue(key, img);
                } else {
                    form.setValue(key, value);
                }
            });
        } else {
            form.reset();
        }
        return () => form.reset();
    }, [params, form, eventInfo]);

    const pickImage = (onChange) => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.error('ImagePicker Error: ', response.errorMessage);
            } else {
                const asset = response.assets?.[0];
                if (asset) {
                    onChange(asset);
                }
            }
        });
    };

    const onSubmit = async (eventData) => {
        try {
            const formattedDate = moment(eventData.eventDate).format('YYYY-MM-DD HH:mm:ss');
            console.log({ formattedDate });
            const formData = new FormData();
            formData.append('username', user?.username);
            formData.append('eventName', eventData.eventName);
            formData.append('eventDate', formattedDate);
            formData.append('eventUrl', eventData.eventUrl);
            if (eventData.imagePath.type) {
                formData.append('imagePath', {
                    uri: eventData.imagePath.uri,
                    name: eventData.imagePath.fileName,
                    type: eventData.imagePath.type,
                });
            }

            if (eventInfo.isEdit) {
                await eventApi.update(params.eventId, formData);
            } else {
                await eventApi.create(formData);
            }
            navigation.navigate(ROUTES.GALLERY_TAB, {
                reload: Date.now(),
            });
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <ScrollView style={styles.container}>
            <Controller
                control={form.control}
                name="imagePath"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    value ?
                        <View style={styles.imageContainer
                        } >
                            <Image
                                style={styles.image}
                                source={{ uri: value?.uri }}
                            />
                            <Icon name="close-circle" style={styles.close} size={30} color={colors.primary} onPress={() => onChange(null)} />
                        </View>
                        :
                        <TouchableOpacity activeOpacity={0.8} style={styles.imageUpload} onPress={() => {
                            pickImage(onChange);
                        }}>
                            <Icon name="add-circle-outline" size={36} />
                            <Text>
                                Upload Image
                            </Text>
                        </TouchableOpacity>

                )}
            />

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
                                        {value ? moment(value).format('YYYY/MM/DD') : 'YYYY/MM/DD'}
                                    </Text>
                                </TouchableOpacity>

                                <DatePicker
                                    modal
                                    open={open}
                                    date={value}
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

                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        title={eventInfo.buttonText}
                        onPress={form.handleSubmit(onSubmit)}
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
    button: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#6e3cd3',
        borderRadius: 4,
        alignItems: 'center',
    },
});
