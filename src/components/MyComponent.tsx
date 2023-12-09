import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index.ts';
import ListOfUsers from '../users/components/ListOfUsers.tsx';

export default function MyComponent(): JSX.Element {
    return (
        <Provider store={store}>
            <ListOfUsers />
        </Provider>
    );
}