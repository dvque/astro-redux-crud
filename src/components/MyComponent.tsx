import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index.ts';
import ListOfUsers from '../users/components/ListOfUsers.tsx';
import CreateNewUser from '../users/components/CreateNewUser.tsx';
import LineChartCustomTooltip from './ReactComponents/LineChartComponent.tsx';
import { Toaster } from 'sonner';

export default function MyComponent(): JSX.Element {
    return (
        <Provider store={store}>
            <ListOfUsers />
            <div className="flex flex-row mt-2">
                <div className="basis-1/2 mr-1 ml-10">
                    <CreateNewUser />
                </div>
                <div className="basis-1/2 ml-1 mr-10">
                    <LineChartCustomTooltip />
                </div>
            </div>

            <Toaster richColors />
        </Provider>
    );
}