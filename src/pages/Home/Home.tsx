import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import { LinkComponent } from '@/components/button/Button';
import { PseudoComponent } from '@/components/pseudo/Pseudo';

import { styles } from "./Home.style";
import { BackgroundHome, Title } from "@/lib/pictures"
import useUser from '@/stores/User.store';
import fetchApi from '@/lib/tools/api';
import useGame from '@/stores/Game.store';

export const ButtonsList = [
	{
		"title": "Créer une partie",
		"href": "/create",
		"isHost": true
	},
	{
		"title": "Rejoindre une partie",
		"href": "/join",
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
	const { setGameId } = useGame()

	const createGame = async () => {
		try {
			await fetchApi('/create-game')
				.then((res) => setGameId(res.id))
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ImageBackground source={BackgroundHome} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<Image alt="Logo" resizeMode="contain" source={Title} />

				<View style={styles.containerButtons}>
					<PseudoComponent />
					{ButtonsList.map((button, index) => (
						<LinkComponent
							key={index}
							label={button.title}
							toPath={button.href}
							onPress={() => {
								if (button.href == '/create') {
									createGame()
								}
								setIsHost(button.isHost || false)
							}}
						/>
					))}
				</View>
			</View>
		</ImageBackground>
	)
}


