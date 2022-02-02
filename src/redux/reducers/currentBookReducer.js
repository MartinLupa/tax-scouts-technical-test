import { currentBookTypes } from "../types/currentBookTypes";
const initialState = { defined: false };

export const currentBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case currentBookTypes.setCurrentBook:
      return { defined: true, bookInfo: action.payload };

    default:
      return state;
  }
};
