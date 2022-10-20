import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const mouseRef = useRef(null)

    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }

    useEffect(() => {

        mouseRef.current.addEventListener("mouseenter", enter)
        mouseRef.current.addEventListener("mouseleave", leave)

        return () => {
            mouseRef.current.removeEventListener("mouseenter", enter)
            mouseRef.current.removeEventListener("mouseleave", leave)
        }
        
    },[])
}

export default Hover