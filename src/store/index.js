import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import menuReducer from "./reducer/menu";
import categoriesReducer from "./reducer/categories";
import translateReducer from "./reducer/translate";
import userRequestReducer from "./reducer/userRequest";
import loadingReducer from "./reducer/loading";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["translate.translate"],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
  translate: translateReducer,
  userRequest: userRequestReducer,
  loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
