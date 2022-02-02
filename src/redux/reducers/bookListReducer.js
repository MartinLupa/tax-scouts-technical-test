import { bookListTypes } from "../types/bookListTypes";
const initialState = [];

export const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookListTypes.setBookList:
      return action.payload;

    default:
      return state;
  }
};
