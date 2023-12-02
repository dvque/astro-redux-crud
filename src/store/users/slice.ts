import { createSlice } from '@reduxjs/toolkit';

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserState extends User {
    id: string;
}

const initialState: UserState[] = [
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
];;

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;