import { currentBookTypes } from "../types/currentBookTypes";

export const currentBook = (data) => ({
  type: currentBookTypes.setCurrentBook,
  payload: { ...data },
});
