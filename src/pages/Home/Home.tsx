import React, { useEffect } from 'react'
import { View, ImageBackground, Image } from 'react-native'

import { LinkComponent } from '@/components/button/Button';
import { PseudoComponent } from '@/components/pseudo/Pseudo';
import { styles } from "./Home.style";

import useUser from '@/stores/User.store';
import useGame from '@/stores/Game.store';
import useServer from '@/stores/Server.store';

import { BackgroundHome, Title } from "@/lib/pictures"
import { fetchApi } from '@/lib/tools/api';
import { sendRequestSocket } from '@/lib/services/websocket';

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
	const { setIsHost, setIsReady, uuid, pseudo } = useUser()
	const { setGameId } = useGame()
	const ws = useServer(state => state.ws);

	const createGame = async () => {
		try {
			const { id: gameId } = await fetchApi('/create-game');
			setGameId(gameId)
			setIsReady(false)

			await sendRequestSocket(ws, 'connect', {
				gameId,
				playerId: uuid,
				playerName: pseudo
			})
			
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


