import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const defaultState: UserState[] = [
    {
        id: "1",
        name: "Peter Doe",
        email: "peter-doe@emial.com",
        github: "peterdoe"
    },
    {
        id: "2",
        name: "John Doe",
        email: "john-doe@email.com",
        github: "johndoe"
    },
    {
        id: "3",
        name: "Jane Doe",
        email: "jane-doe@email.com",
        github: "janedoe"
    },
    {
        id: "4",
        name: "Mary Doe",
        email: "mary-doe@email.com",
        github: "dvque"
    }
];

export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserState extends User {
    id: UserId;
}

// IFIE: Immediately Invoked Function Expression
const initialState: UserState[] = (() => {
    if (typeof window !== 'undefined') {
        const persistedState = localStorage.getItem('reduxState');
        if (persistedState != null) {
            return JSON.parse(persistedState).users;
        }
    }
    return defaultState;
})() as UserState[];


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const newUser = action.payload;
            const newId = (state.length + 1).toString(); // crypto.randomUUID();
            return [
                ...state,
                { ...newUser, id: newId }
            ];
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter(user => user.id !== id);
        },
    }
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById } = usersSlice.actions;