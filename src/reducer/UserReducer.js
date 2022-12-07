import {SIGN_IN, SIGN_OUT} from '../constant/Constants';

const INITIAL_STATE = {
  login: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        login: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};
