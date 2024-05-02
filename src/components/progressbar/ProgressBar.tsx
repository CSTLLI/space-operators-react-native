import { View, Image } from "react-native"
import { styles } from "./ProgressBar.style"

import { Rocket } from "@/lib/pictures"
import { colors } from "@/lib/const"

export const ProgressBarComponent = ({
    value: number
}) => {
    const getWidthValue = (value: number) => (value/100)*325
    const getPositionRocket = (value: number) => getWidthValue(value)-65

    const getColorProgressBar = (value: number) => {
        if (number >= 65) return colors.greenColor
        if (number >= 35 && number <= 65) return colors.orangeColor
        if (number <= 35) return colors.primaryColor
    }

    return (
        <View style={styles.container}>
            <View style={[styles.bar, {width: getWidthValue(number), backgroundColor: getColorProgressBar(number)}]} />
            <View style={styles.barFull} />
            <Image alt="Logo" resizeMode="contain" source={Rocket} style={[styles.rocket, {left: getPositionRocket(number)}]}/>
        </View>
    )
}