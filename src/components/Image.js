import {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {

    const [hovered, setHovered] = useState(false)

    const {toggleFavorite} = useContext(Context)

    const heartIcon = hovered && <i onClick={()=> toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    const filledHeart = img.isFavorite && <i onClick={()=> toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
    
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
           {heartIcon} {filledHeart}
           {cartIcon}
        </div>
    )
}

export default Image