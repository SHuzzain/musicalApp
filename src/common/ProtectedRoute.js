import React, {ReactNode, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const ProtectedRoute = ({children}) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const navigation = useNavigation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('AuthStack');
      // redirect user login screen if user not login in
    }
  }, [isAuthenticated, navigation]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
