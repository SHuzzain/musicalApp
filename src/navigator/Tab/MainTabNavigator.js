import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../utils/constants';
import { colors } from '../../styles/color';
import EventFloatButtom from '../../components/Button/event-button';
import RegisterScreen from '../../screens/Register/RegisterScreen';
import EventScreen from '../../screens/Event/EventScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import GalleryScreen from '../../screens/Gallery/GalleryScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, { focused, color, size }) => {
  let iconName = 'help-circle-outline';
  if (route.name === ROUTES.HOME_TAB) {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === ROUTES.Register_TAB) {
    iconName = focused ? 'journal' : 'journal-outline';
  } else if (route.name === ROUTES.NEW_EVENT_TAB) {
    iconName = focused ? 'add' : 'add-outline';
    color = 'white';
  } else if (route.name === ROUTES.GALLERY_TAB) {
    iconName = focused ? 'image' : 'image-outline';
  } else if (route.name === ROUTES.PROFILE_TAB) {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const eventTab = props => (
  <EventFloatButtom children={props.children} onPress={props.onPress} />
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
        component={HomeScreen}
        options={{
          tabBarLabel: ROUTES.HOME,
        }}
      />

      <Tab.Screen
        name={ROUTES.Register_TAB}
        component={RegisterScreen}
        options={{
          tabBarLabel: ROUTES.REGISTER,
        }}
      />

      <Tab.Screen
        name={ROUTES.NEW_EVENT_TAB}
        component={EventScreen}
        options={{
          tabBarLabel: ROUTES.NEW_EVENT,
          tabBarButton: eventTab,
        }}
      />

      <Tab.Screen
        name={ROUTES.GALLERY_TAB}
        component={GalleryScreen}
        options={{
          tabBarLabel: ROUTES.GALLERY,
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE_TAB}
        component={HomeScreen}
        options={{
          tabBarLabel: ROUTES.PROFILE,
        }}
      />


    </Tab.Navigator>
  );
};

export default MainTabNavigator;
