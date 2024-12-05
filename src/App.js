import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import store from './redux/store';
import AppNavigator from './navigator/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gesture}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
});
