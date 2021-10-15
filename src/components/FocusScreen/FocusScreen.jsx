import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef()

    console.log(inputRef);
    const handleClick = ()=>{
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div className="p-5">
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                type="text" 
                placeholder="Su nombre" 
            />

            <button onClick={handleClick} className="btn btn-primary mt-3">Focus</button>
        </div>
    )
}
