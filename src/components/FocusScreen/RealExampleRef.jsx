import React, { useState } from 'react'
import {MultipleHooks} from '../Examples/MultipleHooks'
export const RealExampleRef = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="p-4">
            <h1>RealeExampleRef</h1>
            <hr />
            {show && <MultipleHooks />}
            <button className="btn btn-outline-danger" onClick={()=>{setShow(!show)}}>
                Show
            </button>
        </div>
    )
}
