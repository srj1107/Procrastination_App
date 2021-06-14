import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import { useSelector } from "react-redux";
//import { BarChart, PieChart } from "react-native-chart-kit";

export default function Results() {
  const availableCounters = useSelector((state) => state.reasons.counter);
  console.log("Hi", availableCounters);
  console.log(availableCounters["FEAR OF FAILURE"]);
  return (
    <View>
      <Header title="Results" />
      <Text>FEAR OF FAILURE</Text>
      <Text>{availableCounters["FEAR OF FAILURE"]}</Text>
      <Text>TOO DISTRACTED</Text>
      <Text>{availableCounters["TOO DISTRACTED"]}</Text>
      <Text>LACK OF MOTIVATION</Text>
      <Text>{availableCounters["LACK OF MOTIVATION"]}</Text>
      <Text>OVERWHELMED</Text>
      <Text>{availableCounters["OVERWHELMED"]}</Text>
      <Text>SOMETHING ELSE</Text>
      <Text>{availableCounters["SOMETHING ELSE"]}</Text>
      <Text>PROACTIVE</Text>
      <Text>{availableCounters["PROACTIVE"]}</Text>
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
