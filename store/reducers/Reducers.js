import * as actionTypes from "../actions/Types";

const initialState = {
  answers: [],
  counter: {
    "FEAR OF FAILURE": 0,
    "TOO DISTRACTED": 0,
    "LACK OF MOTIVATION": 0,
    OVERWHELMED: 0,
    "SOMETHING ELSE": 0,
    PROACTIVE: 0,
  },
};

const reasonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANSWERS:
      console.log(state.answers);
      console.log(state.counter);
      return {
        ...state,
        counter: {
          ...state.counter,
          [action.payload.reason]: state.counter[action.payload.reason] + 1,
        },
        answers: [action.payload, ...state.answers],
      };
    case actionTypes.DELETE_ANSWERS:
      return {
        ...state,
        answers: state.answers.filter((answer) => {
          return answer !== action.payload;
        }),
        counter: {
          ...state.counter,
          [action.payload.reason]: state.counter[action.payload.reason] - 1,
        },
      };
    default:
      return state;
  }
};

export default reasonsReducer;
