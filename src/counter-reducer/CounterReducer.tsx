import { useReducer, useState } from "react"
import { CounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer"


const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = () => {
    const [ counterState, dispatch ] = useReducer( counterReducer, INITIAL_STATE )
    return(
        <>
            <h1>Counter Reducer Segmentado</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={() => dispatch({ type: 'increaseBy', payload: { value: 1 } })}>
                +1
            </button>
            <button onClick={() => dispatch({ type: 'increaseBy', payload: { value: 5 } })}>
                +5
            </button>
            <button onClick={() => dispatch({ type: 'increaseBy', payload: { value: 10 } })}>
                +10
            </button>
            <button onClick={ () => dispatch({ type: 'reset'}) }>
                Reset
            </button>
        </>
    )
}