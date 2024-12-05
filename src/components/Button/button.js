import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = props => {
  const {textStyle, title = 'Button', ...rest} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
      style={[styles.appButtonContainer, props.style]}>
      <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});
