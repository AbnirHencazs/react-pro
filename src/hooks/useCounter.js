import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const MAXIMUM_VALUE = 10

export const useCounter = () => {
    const [ counter, setCounter ] = useState(5);
    const counterElement = useRef(null);

    const handleClick = () => {
        if(counter < MAXIMUM_VALUE){
            setCounter((prev) => prev + 1)
        }
    }

    useEffect(() => {
        if(counter < MAXIMUM_VALUE) return

        const timeLine = gsap.timeline()
        timeLine.to( counterElement.current, { y: -10, duration: 0.2, ease:'ease.out' } )
        .to( counterElement.current, { y:0, duration: 1, ease: 'bounce.out'} )

    }, [counter])
    
    return{
        counter,
        counterElement,
        handleClick
    }
}