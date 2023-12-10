import { Button, Card, TextInput, Title } from '@tremor/react';
import React from 'react'

export default function CreateNewUser(): JSX.Element {
    return (
        <div className="mx-10 mt-10">
            <Card>
                <Title className="mb-4">
                    Crear nuevo usuario
                </Title>

                <form className="mb-4">
                    <div className="form-group  mt-5">
                        <label htmlFor="name" className='text-white'>Nombre</label>
                        <TextInput type="text" id="name" className="form-control" placeholder='Introduzca el nombre completo...' />
                    </div>
                    <div className="form-group  mt-5">
                        <label htmlFor="email" className='text-white'>Email</label>
                        <TextInput type="text" id="email" className="form-control" placeholder='Introduzca su dirección de correo electrónico...' />
                    </div>
                    <div className="form-group  mt-5">
                        <label htmlFor="github" className='text-white'>Github</label>
                        <TextInput type="text" id="github" className="form-control" placeholder='Introduzca su cuenta de Github...' />
                    </div>
                    <Button className="btn btn-primary  mt-10" type='submit'>Crear</Button>
                </form>
            </Card>
        </div>
    );
}