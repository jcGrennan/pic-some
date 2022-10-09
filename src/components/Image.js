import {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

function Image({className, img}) {

    const [hovered, setHovered] = useState(false)

    const {toggleFavorite} = useContext(Context)

    function handleHeart() {
        const handleClick = ()=> toggleFavorite(img.id)
        
        if(img.isFavorite) {
            return <i onClick={handleClick} className="ri-heart-fill favorite"></i>
        } else if(hovered) {
            return <i onClick={handleClick} className="ri-heart-line favorite"></i>
        }
    }

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
           {handleHeart()}
           {cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        url: PropTypes.string.isRequired
    })
}

export default Image