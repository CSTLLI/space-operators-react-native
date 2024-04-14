import React from 'react'
import { View, Text } from 'react-native'

import { stylesButton } from './Button.style';

interface Props {
    label: string;
    color?: string;
    link?: string;
}

export const ButtonComponent = (ButtonProps: Props) => {
  return (
    <View style={stylesButton.container}>
        <Text>{ButtonProps.label}</Text>
    </View>
  )
}
