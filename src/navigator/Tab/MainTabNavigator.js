import React from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stack/HomeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {ROUTES} from '../../utils/constants';
import {colors} from '../../styles/color';
import EventFloatButtom from '../../components/Button/event-button';
import EventStack from '../Stack/EventStack';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, {focused, color, size}) => {
  let iconName = 'help-circle-outline';

  if (route.name === ROUTES.HOME_TAB) {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === ROUTES.PROFILE_TAB) {
    iconName = focused ? 'person' : 'person-outline';
  } else if (route.name === ROUTES.NEW_EVENT_TAB) {
    iconName = focused ? 'add' : 'add-outline';
    color = 'white';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const eventTab = props => (
  <EventFloatButtom children={props.children} onPress={props.onPress} />
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: props => getTabBarIcon(route, props),
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
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
        component={EventStack}
        options={{
          tabBarLabel: ROUTES.NEW_EVENT,
          tabBarButton: eventTab,
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
