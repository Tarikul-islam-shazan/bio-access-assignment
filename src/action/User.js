import {SIGN_IN, SIGN_OUT} from '../constant/Constants';

export function signIn() {
  return {
    type: SIGN_IN,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
