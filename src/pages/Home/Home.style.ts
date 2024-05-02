import { colors } from "@/lib/const";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  containerItems: {
    // backgroundColor: 'blue',
    marginTop: 200,
    marginLeft: "auto",
    marginRight: "auto",
    height: 600,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  containerButtons: {
    // backgroundColor: "red",
    alignItems: "center",
    alignSelf: "center",
    gap: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#221D1D",
    height: 380,
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginTop: 4,
    paddingLeft: 16,
    paddingVertical: 10,
    width: 255,
    borderRadius: 5,
    alignSelf: "center",
    fontFamily: "BowlbyOneSC_400Regular",
    color: "white",
	borderWidth: 4,
	borderColor: colors.primaryColor,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignContent: 'center'
  },
});
