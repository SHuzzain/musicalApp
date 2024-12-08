import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';

const CustomInput = ({ text, name, required, keyboardType, onPress }) => {
    const { control } = useFormContext();
    return (
        <>
            <Text style={styles.label}>{text}</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onPress={(e) => onPress ? onPress(e) : () => { }}
                        keyboardType={keyboardType || 'default'}
                        style={styles.input}
                        cursorColor={'#616163'}
                        onBlur={onBlur}

                        onChangeText={textValue => onChange(textValue)}
                        value={value}
                    />
                )}
                name={name}
                rules={{ required }}
            />
        </>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
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
