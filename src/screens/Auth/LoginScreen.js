import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { useDispatch } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button/button';
import { loginUser } from '../../redux/actions/authActions';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    dispatch(loginUser(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/login-bg.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>User Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              cursorColor={'#616163'}
              onBlur={onBlur}
              onChangeText={textValue => onChange(textValue)}
              value={value}
            />
          )}
          name="username"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              secureTextEntry

              onBlur={onBlur}
              onChangeText={textValue => onChange(textValue)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
        />

        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          title="Login"
          onPress={handleSubmit(onSubmit)}
        />

        <Text style={styles.newUser}>
          New User?{' '}
          <Text
            style={styles.createUser}
            onPress={() => navigation.navigate('Register', {
              isNew: true,
            })}>
            Create an account
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    color: 'black',
  },
  newUser: {
    textAlign: 'center',
  },
  createUser: {
    color: '#6e3cd3',
  },
});
