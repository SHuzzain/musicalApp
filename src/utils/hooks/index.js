import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useTabScreenListeners = (paramsToSet) => {
    const navigation = useNavigation();

    return useCallback(() => ({
        blur: () => navigation.setParams(paramsToSet),
        tabPress: () => navigation.setParams(paramsToSet),
    }), [navigation, paramsToSet]);
};

import { useState, useEffect } from 'react';

/**
 * @param {any} value
 * @param {number} delay
 */
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};


