import { ReadyButtonComponent, ButtonComponent, LinkComponent } from '@/components/button/Button'
import { View, ImageBackground, Text } from 'react-native'

import { BackgroundSession } from '@/lib/pictures'
import { styles } from './Session.style'

import useUser from '@/stores/User.store'
import useGame from '@/stores/Game.store'
import { colors } from '@/lib/const'

export const SessionScreen = () => {
	const { isHost, isReady, setIsReady } = useUser();
	const { serverId } = useGame();

	return (
		<ImageBackground source={BackgroundSession} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<View style={styles.containerList}>

				</View>
				<View style={styles.containerButtons}>
					{isHost ? (
						<View>
							<Text>{serverId}</Text>
							<ButtonComponent label="Démarrer la partie" onPress={() => ''} />
						</View>
					) : null}
					<ReadyButtonComponent
						onPress={() => setIsReady(!isReady)}
						label={isReady ? "Prêt" : "Pas prêt"}
						color={isReady ? colors.primaryColor : colors.greenColor}
					/>
					<LinkComponent label="Retour" toPath="/" />
				</View>
			</View>
		</ImageBackground>
	)
}
