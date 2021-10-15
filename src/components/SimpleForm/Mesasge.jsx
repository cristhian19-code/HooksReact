import React, { useEffect, useState } from 'react'

export const Mesasge = () => {
    const [coord, setCoord] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const mouseMove = (e) => {
            const coord = { x: e.x, y: e.y }
            setCoord(coord)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <div>
            <p>Hola que tal ? </p>
            <p>x:{coord.x} || y:{coord.y}</p>
        </div>
    )
}
