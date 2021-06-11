import * as actionTypes from "../actions/Types";

const initialState = {
  answers: [],
};

const reasonsReducer = (state = initialState, action) => {
  // console.log(action.type, actionTypes.ADD_ANSWERS);
  switch (action.type) {
    case actionTypes.ADD_ANSWERS:
      console.log(action.payload.id);
      return {
        ...state,
        answers: [action.payload.reason, ...state.answers],
      };
    case actionTypes.DELETE_ANSWERS:
      return {
        ...state,
        answers: state.answers.filter((answer) => {
          return answer !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reasonsReducer;
