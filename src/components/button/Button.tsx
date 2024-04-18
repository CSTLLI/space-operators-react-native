import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Link, To } from 'react-router-native';
import { stylesButton } from './Button.style';

interface LinkProps {
    label: string;
    color?: string;
    toPath: To;
}

interface ButtonProps {
    label: string;
    color?: string;
    onPress: () => void;
}

export const LinkComponent: React.FC<LinkProps> = ({ label, color, toPath }) => {
  return (
    <Link style={stylesButton.container} to={toPath}>
        <Text style={stylesButton.text}>{label}</Text>
    </Link>
  );
};

export const ButtonComponent: React.FC<ButtonProps> = ({ label, color, onPress }) => {
  return (
    <TouchableOpacity style={stylesButton.container} onPress={onPress}>
        <Text style={stylesButton.text}>{label}</Text>
    </TouchableOpacity>
  );
};