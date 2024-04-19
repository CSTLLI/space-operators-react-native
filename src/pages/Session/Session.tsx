import { ReadyButtonComponent, ButtonComponent, LinkComponent } from '@/components/button/Button'
import { View, ImageBackground, Text, ScrollView } from 'react-native'

import { BackgroundSession } from '@/lib/pictures'
import { styles } from './Session.style'

import useUser from '@/stores/User.store'
import useGame, { PlayerState } from '@/stores/Game.store'
import { colors } from '@/lib/const'
import { randomPlayers } from '@/lib/mock'
import { useEffect } from 'react'

export const SessionScreen = () => {
	const { isHost, isReady, setIsReady } = useUser();
	const { gameId, players, updatePlayers } = useGame();

	useEffect(() => {
		updatePlayers(randomPlayers)
	}, [])

	const getReadyPlayers = (player: PlayerState) => {
		return player.status ? colors.greenColor : colors.primaryColor
	}

	return (
		<ImageBackground source={BackgroundSession} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<ScrollView style={styles.containerList}>
					{players.map((player, index) => (
						<View key={index} style={styles.playerElement}>
							<Text style={styles.player}>{player.playerName}</Text>
							<View style={[styles.playerPoint, { backgroundColor: getReadyPlayers(player) }]}></View>
						</View>
					))}
				</ScrollView>
				<View style={styles.containerButtons}>
					{isHost ? (
						<View style={{alignItems: "center" }}>
							<Text style={styles.gameId}>Game ID: {gameId}</Text>
							<ButtonComponent label="Démarrer la partie" onPress={() => ''} />
						</View>
					) : null}
					<ReadyButtonComponent
						onPress={() => setIsReady(!isReady)}
						label={isReady ? "Prêt" : "Pas prêt"}
						color={isReady ? colors.greenColor : colors.primaryColor}
					/>
					<LinkComponent label="Retour" toPath="/" />
				</View>
			</View>
		</ImageBackground>
	)
}
