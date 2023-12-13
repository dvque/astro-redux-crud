import { configureStore, type Middleware } from '@reduxjs/toolkit';

import userReducer, { rollbackUser } from "../users/store/slice.ts"
import { toast } from 'sonner'



// Middleware in Redux is a function that is able to intercept, and act accordingly, our actions before they reach the reducer.
const persistanceLocalStorageMiddleware: Middleware = (store: { getState: () => any; }) => (next: (arg0: any) => void) => (action: any) => {
    next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
}

const syncWithDatabaseMiddleware: Middleware = (store: { getState: () => any; }) => (next: (arg0: any) => void) => (action: any) => {
    const { type, payload } = action;
    const previousState = store.getState();

    next(action);

    // after the action is dispatched
    if (type === 'users/deleteUserById') {
        const userToRemove = previousState.users.find((user: { id: any; }) => user.id === payload);
        const { id } = payload;
        void fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.ok) {
                    toast.success('User deleted successfully');
                }
                else {
                    toast.error('Error deleting user');
                    throw new Error('Error deleting user');
                }
            })
            .catch(err => {
                toast.error(`Error deleting user ${userToRemove.name}`);
                if (userToRemove != null) store.dispatch(rollbackUser(userToRemove));

                console.error(err);
            })
    }

}

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware]
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch