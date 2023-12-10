import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index.ts';
import ListOfUsers from '../users/components/ListOfUsers.tsx';
import CreateNewUser from '../users/components/CreateNewUser.tsx';

export default function MyComponent(): JSX.Element {
    return (
        <Provider store={store}>
            <ListOfUsers />
            <CreateNewUser />
        </Provider>
    );
}