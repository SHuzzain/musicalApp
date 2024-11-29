import React from 'react';
import {View, Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../redux/reducers/authSlice';
import {AppDispatch} from '../../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<string>>();

  const handleLogin = () => {
    console.log('hi');
    const user = {id: '1', name: 'John Doe', email: 'john@example.com'};
    dispatch(loginSuccess(user));
    navigation.navigate('MainScreen');
  };

  return (
    <View>
      <Text>hello</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
