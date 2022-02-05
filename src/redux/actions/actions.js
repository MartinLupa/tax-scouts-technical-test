import { bookListTypes } from "../types/bookListTypes";
import { currentBookTypes } from "../types/currentBookTypes";
import { searchQueryTypes } from "../types/searchQueryTypes";
import { userTypes } from "../types/userTypes";

export const setLoggedUser = (data) => ({
  type: userTypes.setLoggedUser,
  payload: { ...data },
});

export const setCurrentBook = (data) => ({
  type: currentBookTypes.setCurrentBook,
  payload: { ...data },
});

export const setSearchQuery = (data) => ({
  type: searchQueryTypes.setSearchQuery,
  payload: data,
});

export const setBookList = (data) => ({
  type: bookListTypes.setBookList,
  payload: data,
});
