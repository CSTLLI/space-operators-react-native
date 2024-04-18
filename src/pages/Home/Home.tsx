import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { ButtonComponent } from '@/components/button/Button';
import { PseudoComponent } from '@/components/pseudo/Pseudo';

import { styles } from "./Home.style";
import { Background, Title } from "@/utils/pictures"

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
		<ImageBackground source={Background} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<Image alt="Logo" resizeMode="contain" source={Title} />

				<View style={styles.containerButtons}>
					<PseudoComponent />
					{ButtonsList.map((button, index) => (
						<ButtonComponent key={index} label={button.title} /*onPress={() => navigation.navigate(button.href)}*//>
					))}
				</View>
			</View>
		</ImageBackground>
	)
}


