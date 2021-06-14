import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Panel from "../components/Card";
import { reasons } from "../constants/Constants";
// import addAnswers from '../store/actions/Actions';
import { connect } from "react-redux";
import { ADD_ANSWERS } from "../store/actions/Types";
import moment from "moment/src/moment";

const Procrastinate = (props) => {
  return (
    <View>
      <Header title="Procrastinating Now?" subtitle="If yes, why?" />
      <View style={styles.bigView}>
        <View style={styles.rowPanel}>
          <TouchableOpacity
            onPress={() => {
              let newObj = {
                id: moment()
                  .utcOffset("+05:30")
                  .format("ddd D MMM, hh:mm:ss A"),
                reason: reasons[0],
              };
              props.onAnswerAdded(newObj);
            }}
          >
            <Panel title={reasons[0]} emoji="😰" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              let newObj = {
                id: moment()
                  .utcOffset("+05:30")
                  .format("ddd D MMM, hh:mm:ss A"),
                reason: reasons[1],
              };
              props.onAnswerAdded(newObj);
            }}
          >
            <Panel title={reasons[1]} emoji="😉" />
          </TouchableOpacity>
        </View>

        <View style={styles.rowPanel}>
          <TouchableOpacity
            onPress={() => {
              let newObj = {
                id: moment()
                  .utcOffset("+05:30")
                  .format("ddd D MMM, hh:mm:ss A"),
                reason: reasons[2],
              };
              props.onAnswerAdded(newObj);
            }}
          >
            <Panel title={reasons[2]} emoji="😞" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              let newObj = {
                id: moment()
                  .utcOffset("+05:30")
                  .format("ddd D MMM, hh:mm:ss A"),
                reason: reasons[3],
              };
              props.onAnswerAdded(newObj);
            }}
          >
            <Panel title={reasons[3]} emoji="🥵" />
          </TouchableOpacity>
        </View>

        <View style={styles.rowPanel}>
          <TouchableOpacity
            onPress={() => {
              let newObj = {
                id: moment()
                  .utcOffset("+05:30")
                  .format("ddd D MMM, hh:mm:ss A"),
                reason: reasons[4],
              };
              props.onAnswerAdded(newObj);
            }}
          >
            <Panel title={reasons[4]} emoji="💬" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              let newObj = {
                id: moment()
                  .utcOffset("+05:30")
                  .format("ddd D MMM, hh:mm:ss A"),
                reason: reasons[5],
              };
              props.onAnswerAdded(newObj);
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
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerAdded: (item) =>
      dispatch({
        type: ADD_ANSWERS,
        payload: item,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Procrastinate);
