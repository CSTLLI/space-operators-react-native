import { ReadyButtonComponent, ButtonComponent, LinkComponent } from '@/components/button/Button'
import { View, ImageBackground, Text, ScrollView } from 'react-native'
import { useNavigate } from 'react-router-native'

import { BackgroundSession } from '@/lib/pictures'
import { styles } from './Session.style'

import useUser from '@/stores/User.store'
import useGame, { PlayerState } from '@/stores/Game.store'
import { colors } from '@/lib/const'
import { useEffect } from 'react'
import { fetchApi } from '@/lib/tools/api'
import useServer from '@/stores/Server.store'
import { sendRequestSocket } from '@/lib/services/websocket'
import ErrorComponent from '@/components/error/Error'

export const SessionScreen = () => {
	const { uuid, isHost, isReady, setIsReady } = useUser();
	const { gameId, players, updatePlayers, error, setError } = useGame();
	const { ws } = useServer()
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
	}, [ws, updatePlayers]);

	const handleMessage = (event: MessageEvent) => {
		if (event.data != "ping") {
			const message = JSON.parse(event.data);
			if (message.type === 'players') {
				updatePlayers(message.data.players);
			}
			if (message.type == "start") {
				navigate('/game')
			}
		}
	};

	const getReadyPlayerColor = (player: PlayerState) => {
		return player.status ? colors.greenColor : colors.primaryColor
	}

	const onPressReady = async () => {
		try {
			await fetchApi(`/ready/${uuid}`)
		} catch (error) {
			console.log(error)
		}
		setIsReady(true)
	}

	const onPressStart = async () => {
		try {
			if (players.length > 1) {
				if (players.every(player => player.status === true)) {
					await sendRequestSocket(ws, 'start', {
						gameId,
					})
				} else {
					setError("Joueurs pas prêts.")
				}
			} else setError("Minimum 2 joueurs")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ImageBackground source={BackgroundSession} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<ScrollView style={styles.containerList}>
					{players.map((player, index) => (
						<View key={index} style={styles.playerElement}>
							<Text style={styles.player}>{player.name}</Text>
							<View style={[styles.playerPoint, { backgroundColor: getReadyPlayerColor(player) }]}></View>
						</View>
					))}
				</ScrollView>
				<View style={styles.containerButtons}>
					<Text style={styles.gameId}>Game ID : {gameId}</Text>
					{isHost ? (
						<View style={{ alignItems: "center" }}>
							<ButtonComponent label="Démarrer la partie" onPress={onPressStart} />
						</View>
					) : null}
					<ReadyButtonComponent
						onPress={onPressReady}
						label={isReady ? "Prêt" : "Pas prêt"}
						color={isReady ? colors.greenColor : colors.primaryColor}
					/>
					<LinkComponent label="Retour" toPath="/" />
					<ErrorComponent message={error} />
				</View>
			</View>
		</ImageBackground>
	)
}
