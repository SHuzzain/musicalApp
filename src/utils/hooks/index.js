import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useTabScreenListeners = (paramsToSet) => {
    const navigation = useNavigation();

    return useCallback(() => ({
        blur: () => navigation.setParams(paramsToSet),
        tabPress: () => navigation.setParams(paramsToSet),
    }), [navigation, paramsToSet]);
};

