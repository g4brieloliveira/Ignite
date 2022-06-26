import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface SkillCardProps {
  skill: string;
  doThis: () => void;
}

export function SkillCard({ skill, doThis }: SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.skillsButton}
      activeOpacity={0.7}
      onLongPress={doThis}
    >
      <Text style={styles.skills}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skills: {
    color: "#fff",
    fontSize: 16,
  },

  skillsButton: {
    marginTop: 10,
    backgroundColor: "#1f1e25",
    padding: 8,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
  },
});
