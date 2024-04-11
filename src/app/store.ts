import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/slices/productSlice";
import basketReducer from "../features/slices/basketSlice";
const rootReducers = combineReducers({
  product: productReducer,
  basket: basketReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
