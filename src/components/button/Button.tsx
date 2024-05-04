import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Link, To, useNavigate } from 'react-router-native';
import { stylesButton } from './Button.style';
import { colors } from '@/lib/const';
import useGame from '@/stores/Game.store';
import useUser from '@/stores/User.store';

interface LinkProps {
	label: string;
	color?: string;
	toPath: To;
	onPress?: () => void;
}

interface ButtonProps {
	label?: string;
	color?: string;
	onPress?: () => void;
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

export const ButtonComponent: React.FC<ButtonProps> = ({ label, onPress, color }) => {
	return (
		<TouchableOpacity style={[stylesButton.default, { backgroundColor: color ? color : colors.primaryColor }]} onPress={onPress}>
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

export const InitializeButtonComponent: React.FC<ButtonProps> = ({ label = "Retour", onPress}) => {
	const navigate = useNavigate()
	const { initializeGame } = useGame()
	const { initializeUser } = useUser()

	const handlePress = () => {
		initializeGame()
		initializeUser()
		if (onPress) {
			onPress()
		}else {
			navigate('/')
		}
	}

	return (
		<ButtonComponent
			label={label}
			onPress={handlePress}
		/>
	)
}