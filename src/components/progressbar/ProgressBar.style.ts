import { StyleSheet } from "react-native";
import {colors} from "@/lib/const";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        position: 'relative'
    },
    bar: {
        height: 15,
        // width: 162.5,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 10
    },
    barFull: {
        backgroundColor: 'white',
        height: 15,
        width: 325,
        borderRadius: 50
    },
    rocket: {
        position: 'absolute',
        zIndex: 15,
        top: -7,
        // left: 97.5
    }
});