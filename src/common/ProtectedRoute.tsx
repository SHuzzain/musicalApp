import React, {ReactNode, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  console.log({isAuthenticated});
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('AuthStack');
      // redirect user login screen if user not login in
    }
  }, [isAuthenticated, navigation]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
