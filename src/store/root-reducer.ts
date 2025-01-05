import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { reset } from "./actions";
import { productReducer } from "../components/products";

const combinedReducer = combineReducers({
  products: productReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer<RootState> = (
  state: RootState | undefined,
  action
) => {
  if (action.type === reset.type) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
