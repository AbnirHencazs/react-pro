import { useState } from "react"
interface Props {
    initialValue?: number
}
export const CounterBy = ({ initialValue = 5 }: Props) => {
    const [ counter, setCounter ] = useState({
        counter: initialValue,
        clicks: 0
    })
    return(
        <>
            <h1>CounterBy: { counter.counter }</h1>
            <h1>Clicks: {counter.clicks}</h1>
            <button onClick={ () => setCounter((prev) => ({ clicks: prev.clicks + 1, counter: prev.counter + 1 })) }>
                +1
            </button>
            <button onClick={ () => setCounter((prev) => ({ clicks: prev.clicks + 1, counter: prev.counter + 1 })) }>+5</button>
        </>
    )
}