import { call, all, put, takeLatest } from "redux-saga/effects";

import UserActionsTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
