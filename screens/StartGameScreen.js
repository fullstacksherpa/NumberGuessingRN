import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import Primarybutton from "../components/ui/Primarybutton";
import Colors from "../constants/colors";

function StartGameScreen({ pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredtext) {
    setEnteredNumber(enteredtext);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "number had to be number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    pickedNumberHandler(enteredNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Primarybutton onPress={resetInputHandler}>Reset</Primarybutton>
        </View>
        <View style={styles.buttonContainer}>
          <Primarybutton onPress={confirmInputHandler}>Confirm</Primarybutton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
