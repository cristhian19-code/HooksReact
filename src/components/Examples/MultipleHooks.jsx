import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

export const MultipleHooks = () => {
    const { state, increment } = useCounter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state || 0}`)
    const { author, quote } = !!data && data[0]

    return (
        <div className="p-4">
            <h1>Custom Hooks</h1>
            {loading
                ? (
                    <div className="alert alert-primary text-center">
                        Loading....
                    </div>)
                : (
                    <blockquote className="blockquote text-center">
                        <p className="mb-3">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }
            <div className="d-flex justify-content-center gap-3">
                <button onClick={increment} className="btn btn-outline-primary">+</button>
            </div>
        </div>
    )
}
