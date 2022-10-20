import {useState, useEffect, useRef} from "react"

function useHover() {

    const [hovered, setHovered] = useState(false)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }
}

export default Hover