import { userTypes } from "../types/userTypes";
const initialState = { isLogged: false, userInfo: {} };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.setLoggedUser:
      return { ...state, isLogged: true, userInfo: action.payload };

    default:
      return state;
  }
};
