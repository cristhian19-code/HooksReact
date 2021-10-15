import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    const {form,handleChangeInput,reset} = useForm({id: new Date().getTime(),name: '',email: ''});
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser(form)
        reset();
    }
    
    return (
        <div className="p-4">
            <h1>LoginScreen</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" className="form-control my-2" value={form.name} onChange={handleChangeInput} placeholder="Name"/>
                <input type="text" name="email" className="form-control my-2" value={form.email} onChange={handleChangeInput} placeholder="Email"/>
                <button type="submit" className="btn btn-outline-danger">Enviar</button>
            </form>
        </div>
    )
}
