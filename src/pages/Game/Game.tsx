import React, { useEffect, useState } from 'react'
import { View, ImageBackground, Text, ScrollView, Modal } from 'react-native'

import { BackgroundGameOperator, BackgroundGameInstructor } from "@/lib/pictures"

import { InitializeButtonComponent, LinkComponent } from '@/components/button/Button';
import { ProgressBarComponent } from '@/components/progressbar/ProgressBar';
import { styles } from "./Game.style";

import useUser from '@/stores/User.store';
import useGame from '@/stores/Game.store';
import useServer from '@/stores/Server.store';

import { OperationResponseState } from '@/lib/mock';
import { TimerComponent } from '@/components/timer/Timer';

export const GameScreen = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [operation, setOperation] = useState<OperationResponseState>()

	const { role, pseudo, setRole, pseudoOperator, setPseudoOperator } = useUser();
	const { turn, setTurn, integrity, setIntegrity, statusGame, setStatusGame } = useGame()
	const { ws } = useServer()

	const endGame = ({ type }) => {
		setModalVisible(true)
		setStatusGame(type)
	}

	useEffect(() => {
		if (operation) {
			setRole(operation.role)
			setTurn(operation.turn)

			if (operation.role == "operator") {
				setPseudoOperator(operation.id)
			}
		}
	}, [operation])

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
		if (event.data != "ping") {
			const message = JSON.parse(event.data);

			if (message.type === 'operation') {
				console.log(pseudo, event)
				setOperation(message.data)
			}

			if (message.type == "integrity") {
				setIntegrity(message.data.integrity)
			};

			if (message.type == "destroyed") {
				endGame({ type: "destroyed"});
			};

			if (message.type == "victory") {
				endGame({ type: "victory"});
			};
		}
	};

	return (
		<ImageBackground
			source={role === "operator" ? BackgroundGameOperator : BackgroundGameInstructor}
			resizeMode="cover"
			style={styles.containerImg}
		>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.centered}>
							{(() => {
								switch (statusGame) {
									case "victory":
										return (
											<View style={styles.centeredView}>
												<Text style={styles.label}>Victoire ! Phase 20 atteinte</Text>
											</View>
										);
									case "destroyed":
										return (
											<View style={styles.centeredView}>
												<Text style={styles.label}>Vaisseau détruit...</Text>
												<Text style={styles.label}>Phase {turn} atteinte</Text>
											</View>
										);
									default:
										return null;
								}
							})()}
							<InitializeButtonComponent />
						</View>
					</View>
				</View>
			</Modal>
			<View style={styles.containerItems}>
				{/* Infos for the 2 roles */}
				<View style={styles.containerInfos}>
					<View style={styles.infos}>
						<Text style={styles.label}>Phase {turn}</Text>
						<TimerComponent value={15} />
					</View>
					<ProgressBarComponent value={integrity} />
					<Text
						style={[styles.label, { marginLeft: 'auto', marginRight: 'auto' }]}
					>
						{role == "operator" ? "Operateur: " + pseudoOperator : "Instructeur"}
					</Text>
				</View>
				{
					role === "operator" ?
						(
							<View style={styles.containerItemsOperator}>

							</View>
						)
						:
						role === "instructor" ?
							(
								<View style={styles.containerItemsOperator}>
									<ScrollView style={styles.containerList}>
										<View style={styles.operationElement}>
											<Text style={styles.operationID}>{operation?.id}</Text>
											<Text style={styles.operationDescription}>{operation?.description}</Text>
										</View>
									</ScrollView>
								</View>
							) : null
				}
				<View style={styles.centered}>
					<LinkComponent label='Quitter' toPath='/' />
				</View>
			</View>
		</ImageBackground>
	);
}