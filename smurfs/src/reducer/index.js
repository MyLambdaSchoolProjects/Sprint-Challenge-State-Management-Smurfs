import { GET_SMURF, ADD_SMURF } from "../actions";

const initState = [
  {
    name: "",
    age: 0,
    height: "0cm"
  }
];

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SMURF:
      return {
          ...state, smurfs: action.payload
      };
      
    case ADD_SMURF:
      return {...state, smurfs: action.payload};
    default:
      return state;
  }
};
