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
import moment from "moment/src/moment";
import { DELETE_ANSWERS } from "../store/actions/Types.js";
import { connect } from "react-redux";

const Entries = (props) => {
  const availableReasons = useSelector((state) => state.reasons.answers);

  return (
    <>
      <Header title="Entries" subtitle="Tap to delete" />
      {availableReasons && availableReasons.length > 0 ? (
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
                      {item === "NOT PROCRASTINATING" ? (
                        <Ionicons
                          name="checkmark-circle-outline"
                          color={colors.success}
                          size={20}
                        />
                      ) : (
                        <Ionicons
                          name="close-circle-outline"
                          color={colors.danger}
                          size={20}
                        />
                      )}
                    </View>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.reason}>{item}</Text>
                    <Text>
                      {moment()
                        .utcOffset("+05:30")
                        .format("ddd D MMM, hh:mm:ss A")}
                    </Text>
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
          <Text style={{ fontSize: 18 }}>Nothing to show here</Text>
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
    marginVertical: 2,
  },
  reason: {
    fontSize: 18,
    color: colors.dark,
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
