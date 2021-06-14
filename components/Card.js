import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Panel-> a custom component used in Procrastinate screen as buttons.
const Panel = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.emojiContainer}>{props.emoji}</Text>
      <Text style={styles.buttonContainer}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 180,
    width: 180,
    backgroundColor: "#1f8eff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    elevation: 12,
    marginLeft: 5,
    marginRight: 6,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  emojiContainer: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default Panel;
