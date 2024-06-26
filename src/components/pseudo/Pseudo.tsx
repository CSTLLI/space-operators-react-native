import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Pseudo.style';
import { pseudoRandoms } from '@/lib/mock';
import Icon from 'react-native-vector-icons/Ionicons';

import useUser from '@/stores/User.store';
import { colors } from '@/lib/const';

export const PseudoComponent = ({
    uuidVisible = true
}) => {
    const { pseudo, setPseudo, uuid} = useUser();

    const onChangeText = (newPseudo: string) => {
        setPseudo(newPseudo);
    }
    
    const generateRandomPseudo = () => {
        const randomIndex = Math.floor(Math.random() * pseudoRandoms.length);
        const randomPseudo = pseudoRandoms[randomIndex];
        setPseudo(randomPseudo);
    }

    return (
        <View style={{ alignItems: "center" }}>
            {uuidVisible && <Text style={styles.label}>{uuid}</Text>}
            <View style={styles.inputGlobal}>
                <TextInput
                    placeholderTextColor={colors.grayColor}
                    placeholder="Entrez un pseudo"
                    value={pseudo}
                    onChangeText={onChangeText}
                    style={styles.input}
                />
                <Icon.Button
                    name="shuffle-sharp"
                    backgroundColor="transparent"
                    size={30}
                    width={48}
                    onPress={generateRandomPseudo}
                    paddingVertical={4}
                    paddingHorizontal={0}
                />
            </View>
        </View>
    )
}
