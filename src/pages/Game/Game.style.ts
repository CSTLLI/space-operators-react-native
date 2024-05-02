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
    marginTop: 90,
    marginLeft: "auto",
    marginRight: "auto",
    height: 800,
    width: 370,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  containerInfos: {
    backgroundColor: "blue",
    gap: 10,
  },
  infos: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  label: {
    fontFamily: 'BowlbyOneSC_400Regular',
    color: 'white',
    marginBottom: 5,
    fontSize: 18 
}
});
