import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { ButtonComponent } from '../../components/button/Button';

import { styles } from "./Home.style";

// import Background from "../../assets/bg_home.png";
// import Title from "../../assets/title.png"

export const ButtonsList = [
	{
		"title": "Créer une partie",
		"href": "CreateGame"
	},
	{
		"title": "Rejoindre une partie",
		"href": "JoinGame"
	},
	{
		"title": "Historique",
		"href": "History"
	},
	{
		"title": "Quitter",
		"href": "Quitter"
	}
]

export const HomeScreen = () => {
	return (
		<ImageBackground  resizeMode="stretch" style={styles.container}>
			<View style={styles.container2}>
				<Image alt="Logo" />

				<View>
					{ButtonsList.map((button, index) => (
						<ButtonComponent key={index} label={button.title} /*onPress={() => navigation.navigate(button.href)}*//>
					))}
				</View>
			</View>
		</ImageBackground>
	)
}


