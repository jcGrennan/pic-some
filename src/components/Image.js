import {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

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

    const {toggleFavorite, addToCart} = useContext(Context)

    function handleHeart() {
        const handleClick = ()=> toggleFavorite(img.id)
        
        if(img.isFavorite) {
            return <i onClick={handleClick} className="ri-heart-fill favorite"></i>
        } else if(hovered) {
            return <i onClick={handleClick} className="ri-heart-line favorite"></i>
        }
    }

    const cartIcon = hovered && 
        <i onClick={() => addToCart(img)}className="ri-add-circle-line cart"></i>


    return (
        <div 
            onMouseEnter={handleHover}
            onMouseLeave={handleHover} 
            className={`${getClassName(className)} image-container`}
        >
           <img alt="product photos" src={img.url} className="image-grid" />
           {handleHeart()}
           {cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.number,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        url: PropTypes.string.isRequired
    })
}

export default Image