import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    flexDirection: "column",
  },
  containerItems: {
    // backgroundColor: 'blue',
    marginTop: 90,
    marginLeft: "auto",
    marginRight: "auto",
    height: 790,
    width: 370,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  containerItemsOperator: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerInfos: {
    // backgroundColor: "blue",
    gap: 10,
  },
  containerList: {
    marginTop: -120,
    width: 300,
    height: 360,
    // backgroundColor: 'blue'
  },
  infos: {
    // backgroundColor: 'red',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "BowlbyOneSC_400Regular",
    color: "white",
    marginBottom: 5,
    fontSize: 18,
  },
  centered: {
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  operationElement: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  operationID: {
    fontFamily: "BowlbyOneSC_400Regular",
    fontSize: 18,
    color: 'white'
  },
  operationDescription: {
    fontSize: 14,
    color: 'white' 
  },
  modalView: {
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
    shadowOpacity: 0.55,
    shadowRadius: 4,
  },
  pending: {
    paddingHorizontal: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.8,
    flex: 1,
  }
});
