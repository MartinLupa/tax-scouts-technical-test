import { bookListTypes } from "../types/bookListTypes";
const initialState = { bookListDefined: false, bookList: [] };

export const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookListTypes.setBookList:
      return { bookListDefined: true, bookList: action.payload };

    default:
      return state;
  }
};
