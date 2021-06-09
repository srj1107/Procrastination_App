import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Panel from "../components/Card";
import { reasons } from "../constants/Constants";
// import addAnswers from '../store/actions/Actions';
import { connect } from "react-redux";
import { ADD_ANSWERS } from "../store/actions/Types";

const Procrastinate = (props) => {
  return (
    <View>
      <Header title="Procrastinating Now?" subtitle="If yes, why?" />
      <View style={styles.bigView}>
        <View style={styles.rowPanel}>
          <TouchableOpacity
            onPress={() => {
              props.onAnswerAdded(reasons[0]);
            }}
          >
            <Panel title={reasons[0]} emoji="😰" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.onAnswerAdded(reasons[1]);
            }}
          >
            <Panel title={reasons[1]} emoji="😉" />
          </TouchableOpacity>
        </View>

        <View style={styles.rowPanel}>
          <TouchableOpacity
            onPress={() => {
              props.onAnswerAdded(reasons[2]);
            }}
          >
            <Panel title={reasons[2]} emoji="😞" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.onAnswerAdded(reasons[3]);
            }}
          >
            <Panel title={reasons[3]} emoji="🥵" />
          </TouchableOpacity>
        </View>

        <View style={styles.rowPanel}>
          <TouchableOpacity
            onPress={() => {
              props.onAnswerAdded(reasons[4]);
            }}
          >
            <Panel title={reasons[4]} emoji="💬" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.onAnswerAdded(reasons[5]);
            }}
          >
            <Panel title={reasons[5]} emoji="😎" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowPanel: {
    width: "94%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 9,
    marginLeft: 1,
    marginRight: 1,
  },
  bigView: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerAdded: (reason) =>
      dispatch({
        type: ADD_ANSWERS,
        payload: reason,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Procrastinate);
