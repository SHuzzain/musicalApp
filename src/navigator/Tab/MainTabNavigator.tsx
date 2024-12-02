import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stack/HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {COLOR, ROUTES} from '../../utils/constants';

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
  console.log({route});
  if (route.name === ROUTES.HOME_TAB) {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === ROUTES.PROFILE_TAB) {
    iconName = focused ? 'person' : 'person-outline';
  } else if (route.name === ROUTES.NEW_EVENT_TAB) {
    iconName = focused ? 'add' : 'add-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: props => getTabBarIcon(route, props),
        tabBarActiveTintColor: COLOR.primary.default,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarLabel: ROUTES.HOME,
        }}
      />

      <Tab.Screen
        name={ROUTES.NEW_EVENT_TAB}
        component={HomeStack}
        options={{
          tabBarLabel: ROUTES.NEW_EVENT,
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE_TAB}
        component={HomeStack}
        options={{
          tabBarLabel: ROUTES.PROFILE,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
