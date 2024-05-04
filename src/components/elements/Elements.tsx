import { View, Text, Switch, TouchableOpacity } from "react-native";
import { styles } from "./Elements.style"
import { colors } from "@/lib/const";
import { ButtonComponent } from "../button/Button";

export interface ElementState {
    id: number;
    type: 'button' | 'switch';
    value: string;
    valueType: 'string' | 'color' | 'number';
}

export interface ElementsComponentProps {
    elements: ElementState[];
    results: {
        [key: string]: number[];
    };
    onElementPress?: (id: number) => void;
}

export const ElementsComponent: React.FC<ElementsComponentProps> = ({ elements, results }) => {
    const renderElement = (element: ElementState, result?: number) => {
        switch (element.type) {
            case 'switch':
                switch (element.valueType) {
                    case 'color':
                        return (
                            <Switch
                                ios_backgroundColor={element.value}
                            />
                        );
                    case 'number':
                    case 'string':
                        return (
                            <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                                <Switch ios_backgroundColor={colors.grayColor}/>
                                <Text style={styles.label}>{element.value}</Text>
                            </View>
                        )
                }
            case 'button':
                switch (element.valueType) {
                    case 'color':
                        return (
                            <ButtonComponent color={element.value} />
                        );
                    case 'number':
                    case 'string':
                        return (
                            <ButtonComponent color={colors.orangeColor} label={element.value} />
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