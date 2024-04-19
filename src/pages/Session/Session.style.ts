import { colors } from "@/utils/const";
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
		alignItems: "center",
		alignSelf: "center",
		gap: 8
	},
	containerList: {
		width: 300,
		height: 500,
		borderColor: colors.primaryColor,
		borderWidth: 4
	}
});
