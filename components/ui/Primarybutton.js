import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Primarybutton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
        } onPress={onPress}>
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
    backgroundColor: Colors.primary500,

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
