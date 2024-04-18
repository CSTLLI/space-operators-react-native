import { ButtonComponent, LinkComponent } from '@/components/button/Button'
import { View, Image, ImageBackground } from 'react-native'

import { BackgroundSession } from '@/utils/pictures'
import { styles } from './Session.style'

export const SessionScreen = () => {
	return (
		<ImageBackground source={BackgroundSession} resizeMode="cover" style={styles.containerImg}>
			<View style={styles.containerItems}>

				<View style={styles.containerButtons}>
					
					<ButtonComponent label="Démarrer la partie" onPress={() => ""}/>
					<ButtonComponent label="Prêt" onPress={() => ""}/>
					<LinkComponent label="Retour" toPath="/"/>
				</View>
			</View>
		</ImageBackground>
	)
}
