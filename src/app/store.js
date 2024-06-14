import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counter/counterSlice";
import numberSlice from "../feature/number/numberSlice";
import logger from "redux-logger";
import usersSlice from "../feature/users/usersSlice";

const store = configureStore({
  reducer: {counter: counterSlice,
    number: numberSlice,
    users: usersSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store