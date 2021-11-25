import { useState } from "react"
interface Props {
    initialValue?: number
}
interface CounterState {
    counter: number;
    clicks: number;
}
export const CounterBy = ({ initialValue = 5 }: Props) => {
    const [ { counter, clicks }, setCounter ] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })
    return(
        <>
            <h1>CounterBy: { counter }</h1>
            <h1>Clicks: { clicks }</h1>
            <button onClick={ () => setCounter(({ clicks, counter }) => ({ clicks: clicks + 1, counter: counter + 1 })) }>
                +1
            </button>
            <button onClick={ () => setCounter(({ clicks, counter }) => ({ clicks: clicks + 1, counter: counter + 1 })) }>+5</button>
        </>
    )
}