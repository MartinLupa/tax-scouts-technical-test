import { searchQueryTypes } from "../types/searchQueryTypes";
const initialState = "";

export const searchQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchQueryTypes.setSearchQuery:
      return action.payload;

    default:
      return state;
  }
};
