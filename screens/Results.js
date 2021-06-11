import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Header from "../components/Header";
import { useSelector } from "react-redux";
//import { BarChart, PieChart } from "react-native-chart-kit";

export default function Results() {
  const availableCounters = useSelector((state) => state.reasons.counter);
  console.log("Hi", availableCounters);
  return (
    <View>
      <Header title="Results" />
      <ScrollView>
        <FlatList
          // style = {styles.counterContainer}
          data={availableCounters}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
});
