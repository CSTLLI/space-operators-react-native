import { StyleSheet } from "react-native";
import { colors } from "@/utils/const";

export const stylesButton = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        paddingVertical: 12,
        width: 250,
        borderRadius: 5,
    },
    text: {
        fontFamily: 'BowlbyOneSC_400Regular',
        color: 'white', 
        textAlign: 'center'
    }
})