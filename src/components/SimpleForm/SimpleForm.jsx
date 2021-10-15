import React, { useState } from 'react'
import { Mesasge } from './Mesasge';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const { name, email } = form;

    const handleChangeInput = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })

    }


    return (
        <div className="p-4">
            <h2>useEffect</h2>
            <hr />
            <div className="form-group">
                <input
                    type="name"
                    name="name"
                    className="form-control my-2"
                    value={name}
                    onChange={handleChangeInput}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    className="form-control my-2"
                    value={email}
                    onChange={handleChangeInput}
                    placeholder="Email"
                />

                {(name === '123456') && <Mesasge />}
            </div>
        </div>
    )
}
