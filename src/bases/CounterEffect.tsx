import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'
interface Props {
    initialValue?: number
}

const MAXIMUM_VALUE = 10

export const CounterEffect = ({ initialValue = 0 }: Props) => {
    const [ counter, setCounter ] = useState(initialValue)
    const counterEl = useRef<HTMLHeadingElement>(null);
    //Cuando se requiera trabajar con referencias HTML, es conveniente user el siguiente hook
    //Tiene la misma firma que useEffect pero podemos usar LayoutEffect cuando necesitemos asegurarnos que sea despues de que se construyo el HTML
    useLayoutEffect(() => {
        if(counter < MAXIMUM_VALUE) return
        gsap.to(counterEl.current, { y: -10, duration: 0.2, ease:'ease.out' }).then(() => {
            gsap.to(counterEl.current, { y:0, duration: 1, ease: 'bounce.out'})
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
            <h2 ref={ counterEl }>{counter}</h2>
            <button onClick={ handleClick }>+1</button>
        </>
    )
}