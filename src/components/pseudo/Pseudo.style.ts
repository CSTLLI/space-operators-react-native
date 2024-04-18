import { StyleSheet } from "react-native";
import {colors} from "@/utils/const";

export const styles = StyleSheet.create({
    input: {
        marginTop: 4,
        paddingHorizontal: 4,
        paddingVertical: 10,
        width: 200,
        borderRadius: 5,
        alignSelf: 'center',
        fontFamily: 'BowlbyOneSC_400Regular',
        color: 'white', 
    },
    inputGlobal: {
        borderRadius: 5,
        borderWidth: 4,
        borderColor: colors.primaryColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
});