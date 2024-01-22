import { View, Text, Pressable, StyleSheet } from "react-native";

const Primarybutton = ({ children }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
        }>
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Primarybutton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",

    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
