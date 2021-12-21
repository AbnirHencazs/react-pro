import { useReducer, useState } from "react"
import * as CounterActions from './actions/actions'
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
            <button onClick={() => dispatch( CounterActions.doIncreaseBy(1) )}>
                +1
            </button>
            <button onClick={() => dispatch( CounterActions.doIncreaseBy(5) )}>
                +5
            </button>
            <button onClick={() => dispatch( CounterActions.doIncreaseBy(10)  )}>
                +10
            </button>
            <button onClick={ () => dispatch( CounterActions.doReset() ) }>
                Reset
            </button>
        </>
    )
}