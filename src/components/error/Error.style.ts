import { colors } from "@/lib/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  errorBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    fontFamily: "BowlbyOneSC_400Regular",
    color: "white",
    marginHorizontal: 5,
    textAlign: 'left',
  },
});
