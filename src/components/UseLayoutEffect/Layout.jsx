import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

export const Layout = () => {
    const { state, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state || 0}`)
    const { author, quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        return () => {
            
        };
    }, [quote])

    return (
        <div className="p-4">
            <h1>Lyout Effect</h1>
            
            <blockquote className="blockquote text-center">
                <p 
                    className="mb-3"
                    ref={pTag}
                >
                        {quote}
                </p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
                
            <div className="d-flex justify-content-center gap-3">
                <button onClick={increment} className="btn btn-outline-primary">Next Quote</button>
            </div>
        </div>
    )
}
