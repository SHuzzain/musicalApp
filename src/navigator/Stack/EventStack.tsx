import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PostDetailScreen from '../../screens/Home/PostDetailScreen';
import {ROUTES} from '../../utils/constants';

const Stack = createStackNavigator();

const EventStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.EVENT}>
      <Stack.Screen name={ROUTES.EVENT} component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default EventStack;
