import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    const { form, handleChangeInput, submitForm } = useForm();

    const { email, password, name } = form

    return (
        <div className="p-4">
            <h2>useEffect</h2>
            <hr />
            <form className="form-group" onSubmit={submitForm}>
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
                    placeholder="Email@prueba.com"
                />
                <input
                    type="password"
                    name="password"
                    className="form-control my-2"
                    value={password}
                    onChange={handleChangeInput}
                    placeholder="Password"
                />
                <button className="btn btn-outline-primary mt-2" type="submit">Enviar</button>
            </form>
        </div>
    )
}
