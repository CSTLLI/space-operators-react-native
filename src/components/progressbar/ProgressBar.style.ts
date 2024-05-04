import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    bar: {
        height: 15,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 10
    },
    barFull: {
        backgroundColor: 'white',
        height: 15,
        borderRadius: 50,
    },
    rocket: {
        position: 'absolute',
        zIndex: 15,
        top: -7,
    }
});