import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  TitleCon: {
    width: "100%",
    padding: 15,
    backgroundColor: "#0496ff",
    justifyContent: "center",
    alignItems: "center",
  },
  innerView: {
    flexDirection: "row",

    margin: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
  ListCon: {
    height: "94%",
    paddingBottom: 70,
  },
  listContent: {
    width: "95%",
    height: 50,
    backgroundColor: "#7400b8",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  ListText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  background: {
    height: "100%",
  },
  DataListCon: {
    height: "80%",
    padding: 3,
    marginBottom: 50,
    backgroundColor: "#7400b8",
    borderColor: "#fec89a",
    borderWidth: 5,
  },
  DataFlatListStyel: {
    backgroundColor: "#7400b8",
  },
});
export { styles };
