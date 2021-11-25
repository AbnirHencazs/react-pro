import { useEffect, useState } from "react"
import { gsap } from 'gsap'
interface Props {
    initialValue?: number
}

const MAXIMUM_VALUE = 10

export const CounterEffect = ({ initialValue = 0 }: Props) => {
    const [ counter, setCounter ] = useState(initialValue)
    useEffect(() => {
        if(counter < MAXIMUM_VALUE) return
        gsap.to('h2', { y: -10, duration: 0.2, ease:'ease.out' }).then(() => {
            gsap.to('h2', { y:0, duration: 1, ease: 'bounce.out'})
        })
    }, [counter])
    const handleClick = () => {
        if(counter < MAXIMUM_VALUE){
            setCounter((prev) => prev + 1)
        }
    }
    return(
        <>
            <h1>Counter effect:</h1>
            <h2>{counter}</h2>
            <button onClick={ handleClick }>+1</button>
        </>
    )
}