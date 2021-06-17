import * as actionTypes from "./Types";

export const addAnswers = (reason) => {
  return {
    type: actionTypes.ADD_ANSWERS,
    payload: reason,
  };
};
