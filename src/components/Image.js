import {useState} from "react"

function Image({className, img}) {

    const [hovered, setHovered] = useState(false)

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

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
           {heartIcon}
           {cartIcon}
        </div>
    )
}

export default Image