import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stack/HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';

type tabBarIconsProps = {
  route: RouteProp<ParamListBase, string>;
  props: {
    focused: boolean;
    color: string;
    size: number;
  };
};

const Tab = createBottomTabNavigator();

// Move the `tabBarIcon` function outside of the component
const getTabBarIcon = (
  route: tabBarIconsProps['route'],
  {focused, color, size}: tabBarIconsProps['props'],
) => {
  let iconName: string = 'help-circle-outline';

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  } else if (route.name === 'Bookmarks') {
    iconName = focused ? 'bookmark' : 'bookmark-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: props => getTabBarIcon(route, props), // Use the external function
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
