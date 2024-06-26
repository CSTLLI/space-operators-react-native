import { StyleSheet } from "react-native";
import { colors } from "@/lib/const";

export const stylesButton = StyleSheet.create({
    default: {
        paddingVertical: 12,
        width: 250,
        borderRadius: 5,
        zIndex: -5
    },
    redBtn: {
        backgroundColor: colors.primaryColor,
    },
    greenBtn: {
        backgroundColor: colors.greenColor
    },
    text: {
        fontFamily: 'BowlbyOneSC_400Regular',
        color: 'white', 
        textAlign: 'center'
    }
})