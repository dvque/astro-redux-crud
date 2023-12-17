import { Badge, Button, Card, TextInput, Title } from '@tremor/react';
import React, { useState } from 'react'
import { useUserActions } from '../hooks/useUserActions'
import type { User } from '../store/slice';

export default function EditUser(): JSX.Element {
    const { editUser } = useUserActions();
    const [result, setResult] = useState<'ok' | 'ko' | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        console.log('hola');
    };

    return (
        <Card className="h-full">
            <Title className="mb-4">
                Editar usuario
            </Title>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group  mt-5">
                    <label htmlFor="name" className='text-white'>Nombre</label>
                    <TextInput type="text" id="name" name='name' value='hola' className="form-control" placeholder='Introduzca el nombre completo...' />
                </div>
                <div className="form-group  mt-5">
                    <label htmlFor="email" className='text-white'>Email</label>
                    <TextInput type="text" id="email" name='email' className="form-control" placeholder='Introduzca su dirección de correo electrónico...' />
                </div>
                <div className="form-group  mt-5">
                    <label htmlFor="github" className='text-white'>Github</label>
                    <TextInput type="text" id="github" name='github' className="form-control" placeholder='Introduzca su cuenta de Github...' />
                </div>
                <Button className="btn btn-primary  mt-10" type='submit'>Editar usuario</Button>
                <Button className="btn btn-danger mt-10 ml-2" variant="secondary" type='reset'>Cancelar</Button>
                <span>
                    {result === 'ok' && <Badge color='green'>Usuario creado correctamente</Badge>}
                    {result === 'ko' && <Badge color='red'>Debe rellenar todos los campos</Badge>}
                </span>
            </form>
        </Card>

    );
}