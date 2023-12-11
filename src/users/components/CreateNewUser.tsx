import { Button, Card, TextInput, Title } from '@tremor/react';
import React from 'react'
import { useUserActions } from '../hooks/useUserActions'
import type { User } from '../store/slice';

export default function CreateNewUser(): JSX.Element {
    const { addUser } = useUserActions();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { name, email, github } = event.target as typeof event.target & {
            name: { value: string };
            email: { value: string };
            github: { value: string };
        };
        const newUser: User = { name: name.value, email: email.value, github: github.value };
        addUser(newUser);
    };

    return (
        <div className="mx-10 mt-10">
            <Card>
                <Title className="mb-4">
                    Crear nuevo usuario
                </Title>

                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="form-group  mt-5">
                        <label htmlFor="name" className='text-white'>Nombre</label>
                        <TextInput type="text" id="name" name='name' className="form-control" placeholder='Introduzca el nombre completo...' />
                    </div>
                    <div className="form-group  mt-5">
                        <label htmlFor="email" className='text-white'>Email</label>
                        <TextInput type="text" id="email" name='email' className="form-control" placeholder='Introduzca su dirección de correo electrónico...' />
                    </div>
                    <div className="form-group  mt-5">
                        <label htmlFor="github" className='text-white'>Github</label>
                        <TextInput type="text" id="github" name='github' className="form-control" placeholder='Introduzca su cuenta de Github...' />
                    </div>
                    <Button className="btn btn-primary  mt-10" type='submit'>Crear usuario</Button>
                </form>
            </Card>
        </div>
    );
}