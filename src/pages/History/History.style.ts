import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    flexDirection: "column",
  },
  containerItems: {
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    width: 370,
    height: 750,
	alignItems: 'center',
	justifyContent: 'space-between'
  },
  containerList: {
	marginTop: -50,
    width: 300,
	maxHeight: 380,
  },
  title: {
    fontFamily: "BowlbyOneSC_400Regular",
    color: "white",
    marginBottom: 5,
    fontSize: 26,	
  },
  label: {
    fontFamily: "BowlbyOneSC_400Regular",
    color: "white",
    marginBottom: 5,
    fontSize: 18,
  },
  historyElement: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    alignItems: 'center',
  },
  historyID: {
    fontFamily: "BowlbyOneSC_400Regular",
    fontSize: 18,
    color: 'white'
  },
  historyDescription: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 20
  },
});
