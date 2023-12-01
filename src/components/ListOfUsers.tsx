import React from 'react'

import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody
} from '@tremor/react';

const users = [
    {
        id: 1,
        name: "Peter Doe",
        email: "peter-doe@emial.com",
        github: "peterdoe"
    },
    {
        id: 2,
        name: "John Doe",
        email: "john-doe@email.com",
        github: "johndoe"
    },
    {
        id: 3,
        name: "Jane Doe",
        email: "jane-doe@email.com",
        github: "janedoe"
    },
    {
        id: 4,
        name: "Mary Doe",
        email: "mary-doe@email.com",
        github: "marydoe"
    }
];

export default function ListOfUsers(): JSX.Element {
    return (
        <Card>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Id</TableHeaderCell>
                        <TableHeaderCell>Nombre</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Acciones</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell className='flex items-center'>
                                <img src={`https://unavatar.io/github/${item.github}`}
                                    alt={item.name}
                                    className="w-8 h-8 rounded-full mr-4"
                                ></img>
                                {item.name}
                            </TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}