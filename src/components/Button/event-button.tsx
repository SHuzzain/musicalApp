import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles/color';

type EventFloatButtomProps = {
  children: React.ReactNode;
  onPress:
    | (((event: GestureResponderEvent) => void) &
        ((
          e:
            | React.MouseEvent<HTMLAnchorElement, MouseEvent>
            | GestureResponderEvent,
        ) => void))
    | undefined;
};

const EventFloatButtom = ({children, onPress}: EventFloatButtomProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.eventTabButton}>
      <View style={styles.eventTabView}>{children}</View>
    </TouchableOpacity>
  );
};

export default EventFloatButtom;

const styles = StyleSheet.create({
  eventTabButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventTabView: {
    width: 60,
    shadowColor: colors.dark,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
  },
});
