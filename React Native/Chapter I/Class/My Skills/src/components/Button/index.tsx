import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  doThis: () => void;
}

export function Button({ text, doThis }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => doThis()}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#a370f7",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
