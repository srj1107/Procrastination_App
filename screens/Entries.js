import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header.js";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/Constants";
import { DELETE_ANSWERS } from "../store/actions/Types.js";
import { connect } from "react-redux";

const Entries = (props) => {
  const availableReasons = useSelector((state) => state.reasons.answers);
  //const availableKeys = useSelector((state) => state.reasons.keys);
  //console.log("Hi", availableReasons);
  return (
    <>
      <Header title="Entries" subtitle="Tap to delete" />
      {availableReasons.length > 0 ? (
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            style={styles.answerContainer}
            data={availableReasons}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={() => {
                    props.onAnswerRemoved(item);
                  }}
                >
                  <View style={styles.itemContainer}>
                    <View>
                      {item.reason === "PROACTIVE" ? (
                        <Ionicons
                          name="checkmark-circle-outline"
                          color={colors.success}
                          size={22}
                        />
                      ) : (
                        <Ionicons
                          name="close-circle-outline"
                          color={colors.danger}
                          size={22}
                        />
                      )}
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.reason}>{item.reason}</Text>
                    <Text>{item.id}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </ScrollView>
      ) : (
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
      )}
    </>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    width: "100%",
    marginVertical: 12,
  },
  textContainer: {
    marginVertical: 3.5,
  },
  reason: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: "bold",
  },
  itemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerRemoved: (reason) =>
      dispatch({
        type: DELETE_ANSWERS,
        payload: reason,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Entries);
