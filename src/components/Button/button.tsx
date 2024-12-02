import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native-gesture-handler';

type Props = TouchableOpacityProps & {
  textStyle?: StyleProp<TextStyle>;
  title: string;
};

const Button: React.FC<Props> = props => {
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
