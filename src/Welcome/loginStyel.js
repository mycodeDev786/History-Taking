import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainCon: {
    flex: 1,
  },
  LogoCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  TitleCon: {
    height: "8%",
    backgroundColor: "#0496ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70,
    marginLeft: 5,
    marginRight: 5,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  image: {
    height: 200,
    width: 200,
    borderColor: "#791e94",
    borderWidth: 4,
    borderRadius: 100,
    resizeMode: "center",
  },
  BottomCon: {
    height: "55%",
    backgroundColor: "#791e94",
    borderWidth: 2,
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
    borderColor: "#B8C0FF",
    margin: 7,
  },
  Input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    width: "90%",
  },

  LoginTextCon: {
    alignItems: "center",
    margin: 20,
    borderRadius: 30,
  },
  LoginText: {
    fontSize: 25,
    margin: 15,
    fontWeight: "bold",
    backgroundColor: "#0496ff",
    textAlign: "center",
    color: "white",
  },
  LoginTextback: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0496ff",
    borderRadius: 40,
  },
  imageDr: {
    height: 350,
    width: 350,
    borderRadius: 100,
    resizeMode: "center",
  },
  TitleText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
export { styles };
