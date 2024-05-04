import { View, Image } from "react-native"
import { styles } from "./ProgressBar.style"

import { Rocket } from "@/lib/pictures"
import { colors } from "@/lib/const"
import { useEffect, useState } from "react"

export const ProgressBarComponent = ({
    value: number
}) => {
    const width = 355;

    const getWidthValue = (value: number) => (value/100)*width
    const getPositionRocket = (value: number) => getWidthValue(value)-65
    const [color, setColor] = useState(colors.orangeColor)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(color == colors.primaryColor ? colors.orangeColor : colors.primaryColor)
        }, 500)

        return () => clearInterval(intervalId)
    }, [color])
    
    const getColorProgressBar = () => {
        if (number >= 65) return colors.greenColor
        if (number >= 35 && number <= 65) return colors.orangeColor
        if (number < 35) return color
    }

    return (
        <View style={styles.container}>
            <View style={[styles.bar, {width: getWidthValue(number), backgroundColor: getColorProgressBar()}]} />
            <View style={styles.barFull} />
            <Image alt="Logo" resizeMode="contain" source={Rocket} style={[styles.rocket, {left: getPositionRocket(number)}]}/>
        </View>
    )
}