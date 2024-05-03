import { colors } from "@/lib/const";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	containerImg: {
		flex: 1,
		flexDirection: "column",
		gap: 4,
	},
	containerItems: {
		display: 'flex',
		gap: 30,
		// backgroundColor: 'blue',
		marginTop: 100,
		marginLeft: "auto",
		marginRight: "auto",
		height: 600,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	containerButtons: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignSelf: "center",
		gap: 8,
		minHeight: 150,
	},
	containerList: {
		width: 300,
		minHeight: 500,
		borderColor: colors.primaryColor,
		borderWidth: 4,
		borderRadius: 5
	},
	playerElement: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 25
	},
	player: {
		color: 'white',
		fontFamily: 'BowlbyOneSC_400Regular',
	},
	playerPoint: {
		width: 25,
		height: 25,
		borderRadius: 50,
	},
	gameId: {
		fontFamily: 'BowlbyOneSC_400Regular',
        color: 'white',
        marginBottom: 5,
        fontSize: 18
	}
});
