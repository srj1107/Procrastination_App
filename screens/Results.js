import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import Header from "../components/Header";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Results = () => {
  const availableCounters = useSelector((state) => state.reasons.counter);
  const display = [
    {
      name: "FEAR OF FAILURE",
      count: availableCounters["FEAR OF FAILURE"],
      color: "#e60000",
      legendFontColor: "black",
      legendFontSize: 10,
    },
    {
      name: "TOO DISTRACTED",
      count: availableCounters["TOO DISTRACTED"],
      color: "#e68a00",
      legendFontColor: "black",
      legendFontSize: 10,
    },
    {
      name: "LACK OF MOTIVATION",
      count: availableCounters["LACK OF MOTIVATION"],
      color: "#29a329",
      legendFontColor: "black",
      legendFontSize: 10,
    },
    {
      name: "OVERWHELMED",
      count: availableCounters["OVERWHELMED"],
      color: "#cccc00",
      legendFontColor: "black",
      legendFontSize: 10,
    },
    {
      name: "SOMETHING ELSE",
      count: availableCounters["SOMETHING ELSE"],
      color: "#666699",
      legendFontColor: "black",
      legendFontSize: 10,
    },
    {
      name: "PROACTIVE",
      count: availableCounters["PROACTIVE"],
      color: "#a6a6a6",
      legendFontColor: "black",
      legendFontSize: 10,
    },
  ];

  if (
    availableCounters["FEAR OF FAILURE"] === 0 &&
    availableCounters["TOO DISTRACTED"] === 0 &&
    availableCounters["LACK OF MOTIVATION"] === 0 &&
    availableCounters["OVERWHELMED"] === 0 &&
    availableCounters["SOMETHING ELSE"] === 0 &&
    availableCounters["PROACTIVE"] === 0
  ) {
    return (
      <>
        <Header title="Results" />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "gray" }}>
            Nothing to show here
          </Text>
        </View>
      </>
    );
  } else {
    return (
      <View>
        <Header title="Results" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            Reasons for Procrastinating
          </Text>
        </View>
        <PieChart
          data={display}
          width={screenWidth}
          height={260}
          chartConfig={{
            backgroundColor: "#26872a",
            backgroundGradientFrom: "#43a047",
            backgroundGradientTo: "#66bb6a",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="count"
          center={[Dimensions.get("window").width / 17, 5]}
        />
      </View>
    );
  }
};

export default Results;
