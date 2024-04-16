import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { stylesButton } from './Button.style';

interface Props {
    label: string;
    color?: string;
    onPress?: () => void;
}

export const ButtonComponent: React.FC<Props> = ({ label, color, onPress }) => {
  return (
    <TouchableOpacity style={stylesButton.container} onPress={onPress}>
        <Text style={{ color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  );
};