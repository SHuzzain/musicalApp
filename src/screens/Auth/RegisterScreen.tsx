import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {loginSuccess} from '../../redux/reducers/authSlice';
import {AppDispatch} from '../../redux/store';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/Button/button';

const RegisterScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {handleSubmit, control} = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    console.log('hi');
    const user = {id: '1', name: 'John Doe', email: 'john@example.com'};
    dispatch(loginSuccess(user));
    navigation.navigate('MainScreen');
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
        <Text style={styles.label}>Full Name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              cursorColor={'#616163'}
              onBlur={onBlur}
              onChangeText={textValue => onChange(textValue)}
              value={value}
            />
          )}
          name="fullname"
          rules={{required: true}}
        />

        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              cursorColor={'#616163'}
              onBlur={onBlur}
              onChangeText={textValue => onChange(textValue)}
              value={value}
            />
          )}
          name="email"
          rules={{required: true}}
        />
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              cursorColor={'#616163'}
              onBlur={onBlur}
              onChangeText={textValue => onChange(textValue)}
              value={value}
            />
          )}
          name="password"
          rules={{required: true}}
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
    </View>
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
