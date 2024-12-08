import React, { useEffect } from 'react';
import AuthStack from './Stack/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { restoreSession } from '../redux/actions/authActions';
import MainTabNavigator from './Tab/MainTabNavigator';
import LoadingSpinner from '../common/LoadingSpinner';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(state => state.auth);

  useEffect(() => {

    dispatch(restoreSession());
  }, [dispatch]);

  console.log({ loading, isAuthenticated });

  if (loading) {
    // Show loading spinner or logo while checking auth
    return <LoadingSpinner />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
