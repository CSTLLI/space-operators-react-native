import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Error.style';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '@/lib/const';
import useGame from '@/stores/Game.store';

interface ErrorComponentProps {
    message: string;
    onClick?: () => void;
}

const ErrorComponent = ({ message }: ErrorComponentProps) => {
    const {error, setError} = useGame()

    useEffect(() => {
        const timer = setTimeout(() => {
            setError("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]); 

    return error != "" ? (
        <View style={styles.errorBox}>
            <Icon
                name="alert-triangle"
                color={colors.primaryColor}
                backgroundColor="transparent"
                size={30}
                width={48}
                paddingVertical={4}
                paddingHorizontal={0}
            />
            <Text style={styles.error}>
                {message}
            </Text>
        </View>
    ) : null;
};

export default ErrorComponent;
