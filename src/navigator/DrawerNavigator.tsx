import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './Stack/HomeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
