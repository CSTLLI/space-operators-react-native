import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Link, To } from 'react-router-native';
import { stylesButton } from './Button.style';
import { colors } from '@/lib/const';

interface LinkProps {
	label: string;
	color?: string;
	toPath: To;
	onPress?: () => void;
}

interface ButtonProps {
	label: string;
	color?: string;
	onPress: () => void;
}

export const LinkComponent: React.FC<LinkProps> = ({ label, toPath, onPress }) => {
	const handlePress = () => {
		if (onPress)
			onPress()
	}
	return (
		<Link style={[stylesButton.default, { backgroundColor: colors.primaryColor }]} onPress={handlePress} to={toPath}>
			<Text style={stylesButton.text}>{label}</Text>
		</Link>
	);
};

export const ButtonComponent: React.FC<ButtonProps> = ({ label, onPress }) => {
	return (
		<TouchableOpacity style={[stylesButton.default, { backgroundColor: colors.primaryColor }]} onPress={onPress}>
			<Text style={stylesButton.text}>{label}</Text>
		</TouchableOpacity>
	);
};

export const ReadyButtonComponent: React.FC<ButtonProps> = ({ label, onPress, color }) => {
	return (
		<TouchableOpacity style={[stylesButton.default, { backgroundColor: color }]} onPress={onPress}>
			<Text style={stylesButton.text}>{label}</Text>
		</TouchableOpacity>
	);
};