import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/LoginScreen';
import { ROUTES } from '../../utils/constants';
import RegisterScreen from '../../screens/Register/RegisterScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />

    </Stack.Navigator>
  );
};

export default AuthStack;
