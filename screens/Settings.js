import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header.js";

export default function Settings() {
  return (
    <SafeAreaView>
      <Header title="Settings" />
      <View>
        <Text>How often should I ask if you are procrastinating?</Text>
        <View style={styles.feedbackContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("Good");
            }}
          >
            <View style={styles.row}>
              <Text>Good</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("Satisfactory");
            }}
          >
            <View style={styles.row}>
              <Text>Satisfactory</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("Poor");
            }}
          >
            <View style={styles.row}>
              <Text>Poor</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contactContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:srj11052001@gmail.com")}
        >
          <View style={styles.row}>
            <Text>Contact developer (I reply to all messages)</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactContainer: {
    backgroundColor: "#1f8eff",
  },
  feedbackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    backgroundColor: "#1f8eff",
  },
});
