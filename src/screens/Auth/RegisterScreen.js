import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button/button';

import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { loginSuccess } from '../../redux/slice/authSlice';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/api/apiEndpoints';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    const response = await axios.post(ENDPOINTS.register, data)
    dispatch(loginSuccess(response.user));
  };

  return (
    <>

      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/login-bg.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="name"
            rules={{ required: true }}
          />

          <Text style={styles.label}>Contact</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="decimal-pad"
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="contact"
            rules={{ required: true }}
          />
          <Text style={styles.label}>brand performance</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="brandPerformance"
            rules={{ required: true }}
          />

          <Text style={styles.label}>category</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="category"
            rules={{ required: true }}
          />


          <Text style={styles.label}>location</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="location"
            rules={{ required: true }}
          />

          <Text style={styles.label}>sponsor</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="sponsor"
            rules={{ required: true }}
          />


          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            title="Sign Up"
            onPress={handleSubmit(onSubmit)}
          />

          <Text style={styles.newUser}>
            already have account?{' '}
            <Text
              style={styles.createUser}
              onPress={() => navigation.navigate('Login')}>
              Login In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 40,
  },
  imageContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },

  label: {
    color: '#616163',
    marginHorizontal: 10,
    marginLeft: 0,
    fontWeight: 'semibold',
  },
  button: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#6e3cd3',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    paddingTop: 10,
    gap: 10,
    padding: 8,
  },
  input: {
    borderWidth: 1.8,
    borderColor: '#cccccc',
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  newUser: {
    textAlign: 'center',
  },
  createUser: {
    color: '#6e3cd3',
  },
});
