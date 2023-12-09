import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../users/store/slice.ts"

// Middleware in Redux is a function that is able to intercept, and act accordingly, our actions before they reach the reducer.
const persistanceLocalStorageMiddleware = (store: { getState: () => any; }) => (next: (arg0: any) => void) => (action: any) => {
    next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
}

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: [persistanceLocalStorageMiddleware]
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch