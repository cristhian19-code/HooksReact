import { useState } from "react"

export const useCounter = (initialState = 0) => {
    const [state, setState] = useState(initialState)

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        if (state > 0) {
            setState(state - 1)
        }
    }

    const reset = () => {
        setState(0)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
