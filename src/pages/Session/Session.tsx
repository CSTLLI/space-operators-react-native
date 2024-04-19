import { ReadyButtonComponent, ButtonComponent, LinkComponent } from '@/components/button/Button'
import { View, ImageBackground } from 'react-native'

import { BackgroundSession } from '@/utils/pictures'
import { styles } from './Session.style'

import useUser from '@/stores/User.store'
import { colors } from '@/utils/const'

export const SessionScreen = () => {
	const { isHost, isReady, setIsReady } = useUser();

	return (
		<ImageBackground source={BackgroundSession} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>
				<View style={styles.containerList}>

				</View>
				<View style={styles.containerButtons}>
					{isHost ? (<ButtonComponent label="Démarrer la partie" onPress={() => ''} />) : ''}
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
