import React, { useState } from 'react'
import { View, ImageBackground, Image, Modal, TextInput, Text, ProgressBarAndroidComponent } from 'react-native'

import { ButtonComponent, LinkComponent } from '@/components/button/Button';
import { ProgressBarComponent } from '@/components/progressbar/ProgressBar';
import { styles } from "./Game.style";

import useUser from '@/stores/User.store';

import { BackgroundGameOperator, BackgroundGameInstructor } from "@/lib/pictures"

export const GameScreen = () => {
	const { role } = useUser();

	if (!role) return;

	return (
		<ImageBackground
			source={role === "operator" ? BackgroundGameOperator : BackgroundGameInstructor}
			resizeMode="cover"
			style={styles.containerImg}
		>
			<View style={styles.containerItems}>
				<View style={styles.containerInfos}>
					<View style={styles.infos}>
						<Text style={styles.label}>Phase 1</Text>
						<Text style={styles.label}>00:30</Text>
					</View>
					<ProgressBarComponent value={50}/>
				</View>
			</View>
		</ImageBackground>
	);
}