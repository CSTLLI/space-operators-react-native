import React, { useEffect, useState } from 'react'
import { View, ImageBackground, Image, Modal, TextInput } from 'react-native'

import { ButtonComponent, LinkComponent } from '@/components/button/Button';
import { PseudoComponent } from '@/components/pseudo/Pseudo';
import { styles } from "./Home.style";

import useUser from '@/stores/User.store';
import useGame from '@/stores/Game.store';
import useServer from '@/stores/Server.store';

import { BackgroundHome, Title } from "@/lib/pictures"
import { fetchApi } from '@/lib/tools/api';
import { sendRequestSocket } from '@/lib/services/websocket';
import { useNavigate } from 'react-router-native';
import ErrorComponent from '@/components/error/Error';
import { colors } from '@/lib/const';

export const ButtonsList = [
	{
		"title": "Créer une partie",
		"href": "/create",
		"isHost": true
	},
	{
		"title": "Rejoindre une partie",
		"action": "joinGame",
	},
	{
		"title": "Historique",
		"href": "/game"
	},
	{
		"title": "Quitter",
		"href": "/exit"
	}
]

export const HomeScreen = () => {
	const [modalVisible, setModalVisible] = useState(false)

	const { setIsHost, setIsReady, uuid, pseudo } = useUser()
	const { setGameId, gameId, setError, error, updatePlayers } = useGame()
	const ws = useServer(state => state.ws);
	const navigate = useNavigate()

	useEffect(() => {
		if (ws && ws.readyState === WebSocket.OPEN) {
			ws.onmessage = handleMessage;
		}
		return () => {
			if (ws) {
				ws.onmessage = null;
			}
		};
	}, [ws]);

	const handleMessage = (event: MessageEvent) => {
		// console.log(event)
		if (event.data != "ping") {
			const message = JSON.parse(event.data);
			if (message.type === 'players' && message.data.players != '') {
				updatePlayers(message.data.players)
				navigate('/join')
			} else {
				setError("Session invalide.")
			}
		}
	};

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

	const joinGame = async () => {
		try {
			setIsReady(false)

			await sendRequestSocket(
				ws,
				'connect',
				{
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
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.containerButtons}>
							<PseudoComponent uuidVisible={false} />
							<TextInput
								placeholder="Serveur ID"
								placeholderTextColor={colors.grayColor}
								value={gameId}
								onChangeText={(event: any) => { setGameId(event.toLowerCase()) }}
								style={styles.input}
							/>
							<ErrorComponent message={error} />
						</View>
						<View style={styles.containerButtons}>
							<ButtonComponent label="Rejoindre" onPress={joinGame} />
							<ButtonComponent label="Retour" onPress={() => setModalVisible(false)} />
						</View>
					</View>
				</View>
			</Modal>
			<View style={styles.containerItems}>
				<Image alt="Logo" resizeMode="contain" source={Title} />

				<View style={styles.containerButtons}>
					<PseudoComponent />
					{ButtonsList.map((button, index) => (
						button.action ? (
							<ButtonComponent
								key={index}
								label={button.title}
								onPress={() => {
									if (button.action === 'joinGame') {
										setModalVisible(true)
									}
									setIsHost(button.isHost || false);
								}}
							/>
						) : (
							<LinkComponent
								key={index}
								label={button.title}
								toPath={button?.href}
								onPress={() => {
									if (button.href == '/create') {
										createGame();
									}
									setIsHost(button.isHost || false);
								}}
							/>
						)
					))}
				</View>

			</View>
		</ImageBackground>
	)
}