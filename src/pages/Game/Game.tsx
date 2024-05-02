import React, { useEffect, useState } from 'react'
import { View, ImageBackground, Image, Modal, TextInput, Text, ProgressBarAndroidComponent } from 'react-native'

import { ButtonComponent, LinkComponent } from '@/components/button/Button';
import { ProgressBarComponent } from '@/components/progressbar/ProgressBar';
import { styles } from "./Game.style";

import useUser from '@/stores/User.store';

import { BackgroundGameOperator, BackgroundGameInstructor } from "@/lib/pictures"
import useGame from '@/stores/Game.store';

export const GameScreen = () => {
	const { role, pseudoOperator, setPseudoOperator } = useUser();
	const { turns } = useGame()

	if (!role) return;

	useEffect(() => {
		setPseudoOperator('BA-25');
	}, [])

	return (
		<ImageBackground
			source={role === "operator" ? BackgroundGameOperator : BackgroundGameInstructor}
			resizeMode="cover"
			style={styles.containerImg}
		>
			<View style={styles.containerItems}>
				{/* Infos for the 2 roles */}
				<View style={styles.containerInfos}>
					<View style={styles.infos}>
						<Text style={styles.label}>Phase {turns}</Text>
						<Text style={styles.label}>00:30</Text>
					</View>
					<ProgressBarComponent value={50}/>
					<Text 
						style={[styles.label, { marginLeft: 'auto', marginRight: 'auto'}]}
					>
						{role == "operator" ? "Operateur: " + pseudoOperator : "Instructeur"}
					</Text>
				</View>
				{
					role === "operator" ? 
					(
						<Text>Operator</Text>
					) : role === "instructor" ?
					(
						<View style={styles.containerItemsOperator}>
							
						</View>
					) : null
				}
				<View style={styles.centered}>
					<LinkComponent label='Quitter' toPath='/'/>
				</View>
			</View>
		</ImageBackground>
	);
}