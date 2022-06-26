import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { SkillCard } from "./components/SkillCard";

interface MySkill {
  id: string;
  name: string;
}

export function Home() {
  const [allSkills, setAllSkills] = useState<MySkill[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddNewSkill = () => {
    const data = {
      id: String(Math.random()),
      name: newSkill,
    };

    setAllSkills([...allSkills, data]);
    setNewSkill("");
  };

  const handleRemoveSkill = (id: string) => {
    setAllSkills(allSkills.filter((skill) => skill.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Gabriel</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#c3c3c3"
        value={newSkill}
        onChangeText={(text) => setNewSkill(text)}
      />
      <Button text="Adicionar" doThis={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 30, marginBottom: 10 }]}>
        Minhas Habilidades
      </Text>

      <FlatList
        data={allSkills}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            doThis={() => handleRemoveSkill(item.id)}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    marginTop: 30,
    backgroundColor: "#1f1e25",
    fontSize: 16,
    color: "#fff",
    padding: 8,
    borderRadius: 4,
  },
});
