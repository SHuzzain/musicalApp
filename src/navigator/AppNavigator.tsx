import React, {useEffect} from 'react';
import AuthStack from './Stack/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {restoreSession} from '../redux/actions/authActions';
import MainTabNavigator from './Tab/MainTabNavigator';
import LoadingSpinner from '../common/LoadingSpinner';

const AppNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {isAuthenticated, loading} = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    // Check user session on app launch
    dispatch(restoreSession());
  }, [dispatch]);

  console.log({loading});

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
