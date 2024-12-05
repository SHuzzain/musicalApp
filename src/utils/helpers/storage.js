import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_TOKEN = {
  get: async () => await AsyncStorage.getItem('authToken'),
  set: async newValue =>
    await AsyncStorage.setItem('authToken', `Bearer ${newValue}`),
  delete: () => AsyncStorage.removeItem('authToken'),
};
