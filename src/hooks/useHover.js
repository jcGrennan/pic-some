/* A custom hook to handle hovering. Not necessary but shows 
possibility of custom hook use for potentially larger websites*/

// importing react hooks. Ref will be used to determine what is being hovered on
import {useState, useEffect, useRef} from "react"

//declaring my custom hook component
function useHover() {

    // setting up state and ref using hooks
    const [hovered, setHovered] = useState(false)
    const mouseRef = useRef(null)

    // declaring function to set hovered state to true when mouse enters
    function enter() {
        setHovered(true)
    }
    
    // declaring function to set it to false when mouse leaves
    function leave() {
        setHovered(false)
    }

    /* setting up an effect that will add and remove event listeners 
    to whatever is being hovered over that will use the custom hook*/
    useEffect(() => {
        let domNodeRef = mouseRef.current
        domNodeRef.addEventListener("mouseenter", enter)
        domNodeRef.addEventListener("mouseleave", leave)

        return () => {
            domNodeRef.removeEventListener("mouseenter", enter)
            domNodeRef.removeEventListener("mouseleave", leave)
        }

    },[])

    // returning ref and hovered state so they can be imported as named variables separatetly
    return [hovered, mouseRef]
}

// exporting my custom hook to be imported where needed
export default useHover