import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    const {user,setUser} = useContext(UserContext)
    console.log(user);
    console.log(setUser);
    return (
        <div className="p-4">
            <h1>HomeScreen</h1>
            <hr />
            <pre>{JSON.stringify(user,null,3)}</pre>
        </div>
    )
}
