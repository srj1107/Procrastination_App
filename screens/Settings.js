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
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header.js";

export default function Settings() {
  const imageUri = "https://picsum.photos/600/600";
  return (
    <SafeAreaView>
      <Header title="About" />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.textContainer}>
          How satisfied are you with your progress?
        </Text>
        <View style={styles.feedbackContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("Excellent");
            }}
          >
            <View style={styles.row}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Excellent
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("Satisfactory");
            }}
          >
            <View style={styles.row}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Satisfactory
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              console.log("Poor");
            }}
          >
            <View style={styles.row}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>Poor</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", marginVertical: 8 }}>
        <Image source={{ uri: imageUri }} style={styles.image}></Image>
      </View>
      <View style={styles.contactContainer}>
        <TouchableOpacity
          style={{ borderRadius: 15 }}
          onPress={() =>
            Linking.openURL("https://github.com/srj1107/Procrastination_App")
          }
        >
          <View style={styles.row}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Source Code
            </Text>
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
  image: {
    width: "80%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "column-reverse",
    justifyContent: "space-around",
  },
  contactContainer: {
    backgroundColor: "gray",
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    marginVertical: 3,
  },
  feedbackContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    backgroundColor: "#1f8eff",
    alignItems: "center",
    flexDirection: "column",
    marginVertical: 7,
    width: 220,
    borderRadius: 15,
    elevation: 12,
  },
  textContainer: {
    marginVertical: 2,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
  },
});
