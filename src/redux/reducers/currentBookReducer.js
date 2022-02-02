import { currentBookTypes } from "../types/currentBookTypes";
const initialState = {};

export const currentBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case currentBookTypes.setCurrentBook:
      return action.payload;

    default:
      return state;
  }
};
