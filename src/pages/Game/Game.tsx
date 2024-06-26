import React, { useEffect, useState } from 'react'
import { View, ImageBackground, Text, ScrollView, Modal, Image } from 'react-native'

import { BackgroundGameOperator, BackgroundGameInstructor, Explosion } from "@/lib/pictures"

import { InitializeButtonComponent, LinkComponent } from '@/components/button/Button';
import { ProgressBarComponent } from '@/components/progressbar/ProgressBar';
import { styles } from "./Game.style";

import useUser from '@/stores/User.store';
import useGame, { StatusGameState } from '@/stores/Game.store';
import useServer from '@/stores/Server.store';

import { OperationResponseState } from '@/lib/mock';
import { TimerComponent } from '@/components/timer/Timer';
import { ElementsComponent } from '@/components/elements/Elements';

export const GameScreen = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [showDestroyedGif, setShowDestroyedGif] = useState(true)
	const [operation, setOperation] = useState<OperationResponseState>()

	const { role, setRole, pseudoOperator, setPseudoOperator, pseudo} = useUser();
	const { turn, players, durationTurn, setTurn, integrity, setIntegrity, statusGame, setStatusGame, setDurationTurn } = useGame()
	const { ws, addGameHistory } = useServer()

	const endGame = ({ type }: StatusGameState) => {
		setModalVisible(true)
		setStatusGame(type)
		if (type == "destroyed") {
			setTimeout(() => {
				setShowDestroyedGif(false)
			}, 1000)
		}
	
	}

	useEffect(() => {
		if (operation) {
			// console.log(pseudo, operation)
			setRole(operation.role)
			setTurn(operation.turn)
			setDurationTurn(operation.duration)

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
				console.log(pseudo, role, message.data)
				setStatusGame('active')
				setOperation(message.data)
			}

			if (message.type == "integrity") {
				setIntegrity(message.data.integrity)
			};

			if (message.type == "destroyed" || message.type == "victory") {
				addGameHistory({
					gameStatus: message.type == "destroyed" ? "defeat" : "victory",
					players: players,
					turns: turn
				})
				endGame({ type: message.type });
			}
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
												<Text style={styles.label}>Victoire ! Phase {turn} atteinte</Text>
											</View>
										);
									case "destroyed":
										return (
											<View style={styles.centeredView}>
												<Text style={styles.label}>Vaisseau détruit...</Text>
												<Text style={styles.label}>Phase {turn} atteinte</Text>
												{showDestroyedGif &&
													<Image
														source={Explosion}
														alt="Explosion"
														style={{ position: 'absolute', width: 400, height: 400, zIndex: 100 }}
													/>
												}
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
			{(() => {
				switch (statusGame) {
					case "not started":
						return (
							<View style={styles.pending}>
								<Text style={styles.label}>La partie va bientôt commencer...</Text>
							</View>
						)
					case "pending":
						return (
							<View style={styles.pending}>
								<Text style={styles.label}>En attente de la prochaine opération...</Text>
							</View>
						)
					case "active":
						return (
							<View style={styles.containerItems}>
								{/* Infos for the 2 roles */}
								<View style={styles.containerInfos}>
									<View style={styles.infos}>
										<Text style={styles.label}>Phase {turn}</Text>
										<TimerComponent value={durationTurn} />
									</View>
									<ProgressBarComponent value={integrity} />
									<Text
										style={[styles.label, { marginLeft: 'auto', marginRight: 'auto' }]}
									>
										{role == "operator" ? "Operateur: " + pseudoOperator : "Instructeur"}
									</Text>
								</View>
								{(() => {
									switch (role) {
										case "operator":
											return (
												<View style={styles.containerItemsOperator}>
													{operation && <ElementsComponent elements={operation.elements} expected={operation.result} />}
												</View>
											)
										case "instructor":
											return (
												<View style={styles.containerItemsOperator}>
													<ScrollView style={styles.containerList}>
														<View style={styles.operationElement}>
															<Text style={styles.operationID}>{operation?.id}</Text>
															<Text style={styles.operationDescription}>{operation?.description}</Text>
														</View>
													</ScrollView>
												</View>
											)
									}
								})()}
								<View style={styles.centered}>
									<LinkComponent label='Quitter' toPath='/' />
								</View>
							</View>
						)
				}
			})()}
		</ImageBackground>
	);
}