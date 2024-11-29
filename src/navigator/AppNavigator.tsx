import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './Stack/AuthStack';
import MainTabNavigator from './Tab/MainTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedRoute from '../common/ProtectedRoute';

const Stack = createStackNavigator();

const ProtectedMainTab = () => (
  <ProtectedRoute>
    <MainTabNavigator />
  </ProtectedRoute>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* with out login user  show this screens */}
        <Stack.Screen name="AuthStack" component={AuthStack} />

        {/*  with  login user  show this screens */}
        <Stack.Screen name="MainScreen" component={ProtectedMainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
