import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import { LinkComponent } from '@/components/button/Button';
import { PseudoComponent } from '@/components/pseudo/Pseudo';

import { styles } from "./Home.style";
import { BackgroundHome, Title } from "@/lib/pictures"
import useUser from '@/stores/User.store';

export const ButtonsList = [
	{
		"title": "Créer une partie",
		"href": "/create",
		"isHost": true
	},
	{
		"title": "Rejoindre une partie",
		"href": "/join",
		"isHost": false
	},
	{
		"title": "Historique",
		"href": "/history"
	},
	{
		"title": "Quitter",
		"href": "/exit"
	}
]

export const HomeScreen = () => {
	const { setIsHost } = useUser()
	return (
		<ImageBackground source={BackgroundHome} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<Image alt="Logo" resizeMode="contain" source={Title} />

				<View style={styles.containerButtons}>
					<PseudoComponent />
					{ButtonsList.map((button, index) => (
						<LinkComponent key={index} label={button.title} toPath={button.href} onPress={() => setIsHost(button.isHost || false)} />
					))}
				</View>
			</View>
		</ImageBackground>
	)
}


