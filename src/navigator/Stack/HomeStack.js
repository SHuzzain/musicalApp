import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import PostDetailScreen from '../../screens/Home/PostDetailScreen';
import {ROUTES} from '../../utils/constants';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.GALLERY} component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
