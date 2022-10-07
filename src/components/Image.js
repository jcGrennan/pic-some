import {useState} from "react"

function Image({className, img}) {

    const [hovered, setHovered] = useState(false)

    function handleHover() {
        setHovered(prevState => !prevState)
    }

    function getClassName(i) {
        if(i % 5 === 0) {
            return "big"
        }
        else if(i % 6 === 0) {
            return "wide"
        }
    } 

    return (
        <div 
            onMouseEnter={handleHover}
            onMouseLeave={handleHover} 
            className={`${getClassName(className)} image-container`}
        >
            <img alt="product photos" src={img.url} className="image-grid" />
        </div>
    )
}

export default Image