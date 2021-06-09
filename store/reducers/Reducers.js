import * as actionTypes from "../actions/Types";

const initialState = {
  answers: [],
};

// const addAnswers = (state, action)=>{
//     console.log(state.answers);
//     return {
//         ...state,
//         answers: [action.payload, ...state.answers]
//     }
// }

const reasonsReducer = (state = initialState, action) => {
  // console.log(action.type, actionTypes.ADD_ANSWERS);
  switch (action.type) {
    case actionTypes.ADD_ANSWERS:
      return {
        ...state,
        answers: [action.payload, ...state.answers],
      };
    default:
      return state;
  }
};

export default reasonsReducer;
