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

      {/* <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {/* <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          // style = {styles.counterContainer}
          data={availableCounters}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
              <Text>{"Sample TExt"}</Text>
            </View>
          )}
        >
          <Text>Kautilya</Text>
        </FlatList>
      </SafeAreaView> */}
      {/* </ScrollView> */}
      <Text>FEAR OF FAILURE</Text>
      <Text>{availableCounters["FEAR OF FAILURE"]}</Text>
      <Text>LACK OF MOTIVATION</Text>
      <Text>{availableCounters["LACK OF MOTIVATION"]}</Text>
    </View>
  );
  // return (
  //   <View>
  //     <Header title="Results" />

  //   </View>
  // );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
  // counterContainer:{

  // },
});
