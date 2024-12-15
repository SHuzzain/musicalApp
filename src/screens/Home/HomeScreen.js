import { View, Text } from 'react-native';
import React from 'react';
import Button from '../../components/Button/button';
import { logoutThunk } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="LogOut" onPress={handleLogOut} />
    </View>
  );
};

export default HomeScreen;
