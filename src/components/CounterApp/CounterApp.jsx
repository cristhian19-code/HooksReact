import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterApp = () => {
    const { increment, decrement, reset, state } = useCounter()
    return (
        <div className="text-center py-3">
            <h1>Counter: {state}</h1>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-outline-primary" onClick={() => { increment(2) }}>+</button>
                <button className="btn btn-outline-success" onClick={() => { decrement(2) }}>-</button>
                <button className="btn btn-outline-danger" onClick={() => { reset() }}>Reset</button>
            </div>
        </div>
    )
}
