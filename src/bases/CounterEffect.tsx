import { useEffect, useState } from "react"
interface Props {
    initialValue?: number
}

const MAXIMUM_VALUE = 10

export const CounterEffect = ({ initialValue = 0 }: Props) => {
    const [ counter, setCounter ] = useState(initialValue)
    useEffect(() => {

    }, [counter])
    const handleClick = () => {
        if(counter < MAXIMUM_VALUE){
            setCounter((prev) => prev + 1)
        }
    }
    return(
        <>
            <h1>Counter effect: { counter }</h1>
            <button onClick={ handleClick }>+1</button>
        </>
    )
}