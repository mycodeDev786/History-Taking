import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

function changeColor(colordecider) {
  let x = 0;
  if (colordecider.slice(-1) == ":") {
    global.foo = "yes";
  } else {
    global.foo = "no";
  }
}

function TextB({ title, des }) {
  const [wordColor, setwordColor] = useState("");
  global.foo = "";
  useEffect(() => {
    changeColor(des);
    setwordColor(foo);
  });
  return (
    <Text
      style={wordColor == "yes" ? styles.DefaultColor : styles.HaedingColor}
    >
      {title}
    </Text>
  );
}
export { TextB };

const styles = StyleSheet.create({
  DefaultColor: {
    fontSize: 20,
    fontWeight: "700",
    marginStart: 30,
    marginEnd: 10,
    borderColor: "red",
    fontStyle: "italic",
    color: "#ccff33",
    textAlign: "justify",
  },

  HaedingColor: {
    fontSize: 20,
    fontWeight: "500",
    marginStart: 30,
    marginEnd: 10,
    color: "#fec89a",
  },
});
