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
        let domNodeRef = mouseRef.current
        domNodeRef.addEventListener("mouseenter", enter)
        domNodeRef.addEventListener("mouseleave", leave)

        return () => {
            domNodeRef.removeEventListener("mouseenter", enter)
            domNodeRef.removeEventListener("mouseleave", leave)
        }

    },[])

    return [hovered, mouseRef]
}

export default useHover