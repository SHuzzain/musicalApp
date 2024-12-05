import {TextStyle} from 'react-native';

const typography: {[key: string]: TextStyle} = {
  normal: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  heading1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 16,
  },
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
};

export default typography;
