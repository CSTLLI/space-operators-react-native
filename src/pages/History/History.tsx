import { View, ImageBackground, Text, ScrollView } from 'react-native'

import { LinkComponent } from '@/components/button/Button'
import { BackgroundGameInstructor } from '@/lib/pictures'
import { styles } from './History.style'

import useServer from '@/stores/Server.store'

export const HistoryScreen = () => {
	const { histories } = useServer()

	return (
		<ImageBackground source={BackgroundGameInstructor} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<Text style={styles.title}>Historique</Text>
				<ScrollView style={styles.containerList}>
					{histories.map((history, index) => (
						<View key={index} style={styles.historyElement}>
							<Text style={styles.historyID}>{history.gameStatus}</Text>
							<Text style={styles.historyDescription}>
								{history.players.map(player => player.name).join(", ")}
							</Text>
							<Text style={styles.historyDescription}>Phase {history.turns}</Text>
						</View>
					))}
				</ScrollView>
				<LinkComponent toPath='/' label='Retour' />
			</View>
		</ImageBackground>
	)
}
