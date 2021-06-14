import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//Common header for all pages
const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textContainer}>{props.title}</Text>
      <Text style={styles.smallTextContainer}>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
    marginVertical: "0%",
    backgroundColor: "#fff",
  },
  textContainer: {
    fontSize: 30,
    //fontFamily: 'GoodFeelingSans',
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  smallTextContainer: {
    fontSize: 24,
    color: "grey",
  },
});

export default Header;
