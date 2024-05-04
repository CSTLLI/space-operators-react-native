import { useState } from "react";
import { View, Text, Switch } from "react-native";

import { ButtonComponent } from "../button/Button";
import { sendRequestSocket } from "@/lib/services/websocket";

import { colors } from "@/lib/const";
import { styles } from "./Elements.style"

import useServer from "@/stores/Server.store";
import useUser from "@/stores/User.store";
import useGame from "@/stores/Game.store";

export interface ElementState {
    id: number;
    type: 'button' | 'switch';
    value: string;
    valueType: 'string' | 'color' | 'number';
}

export interface ExpectedState {
    switchs?: number[];
    buttons?: {
        ids: number[];
    };
}

export interface ElementsComponentProps {
    elements: ElementState[];
    expected: ExpectedState;
    onElementPress?: (id: number) => void;
}

export const ElementsComponent: React.FC<ElementsComponentProps> = ({ elements, expected }) => {
    const [results, setResults] = useState<number[]>([])

    const { pseudoOperator } = useUser()
    const { setStatusGame } = useGame()
    const { ws } = useServer()

    const arraysAreEqual = (array1: number[], array2: number[]) => {
        if (array1.length !== array2.length) {
            return false;
        }

        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        return true;
    };

    const handleElementPress = (id: number) => {
        const updatedResults = [...results];
        const expectedResults: number[] = expected.switchs || (expected.buttons?.ids) || [];

        updatedResults.push(id);
        updatedResults.sort((a, b) => a - b);

        setResults(updatedResults);
        // console.log("Results:", updatedResults);
        // console.log("Expected:", expectedResults);      
        // console.log("Are equal:", arraysAreEqual(updatedResults, expectedResults));

        if (arraysAreEqual(updatedResults, expectedResults)) {
            handleSubmitResponse();
        }
    };

    const handleSubmitResponse = async () => {
        console.log("submit")
        await sendRequestSocket(ws, "finish", {
            operator: pseudoOperator,
            success: true
        })
        setStatusGame('pending')
    }

    const renderElement = (element: ElementState) => {
        switch (element.type) {
            case 'switch':
                switch (element.valueType) {
                    case 'color':
                        return (
                            <Switch
                                ios_backgroundColor={element.value}
                                onValueChange={() => handleElementPress(element.id)}
                            />
                        );
                    case 'number':
                    case 'string':
                        return (
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                                <Switch
                                    ios_backgroundColor={colors.grayColor}
                                    onValueChange={() => handleElementPress(element.id)}
                                />
                                <Text style={styles.label}>{element.value}</Text>
                            </View>
                        )
                }
            case 'button':
                switch (element.valueType) {
                    case 'color':
                        return (
                            <ButtonComponent
                                color={element.value}
                                onPress={() => handleElementPress(element.id)}
                            />
                        );
                    case 'number':
                    case 'string':
                        return (
                            <ButtonComponent
                                color={colors.orangeColor}
                                label={element.value}
                                onPress={() => handleElementPress(element.id)}
                            />
                        )
                }
        }
    };
    return (
        <View style={styles.container}>
            {elements.map((element, index) => (
                <View key={index} style={styles.container}>
                    {renderElement(element)}
                </View>
            ))}
        </View>
    );
}