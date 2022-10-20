import {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className, img}) {

    const [hovered, mouseRef] = useHover()
    
    const {
        toggleFavorite, 
        cartItems, 
        addToCart, 
        removeFromCart
    } = useContext(Context)

    function getClassName(i) {
        if(i % 5 === 0) {
            return "big"
        }
        else if(i % 6 === 0) {
            return "wide"
        }
    } 


    function handleHeart() {
        const handleClick = () => toggleFavorite(img.id)
        
        if(img.isFavorite) {
            return <i onClick={handleClick} className="ri-heart-fill favorite"></i>
        } else if(hovered) {
            return <i onClick={handleClick} className="ri-heart-line favorite"></i>
        }
    }

    function handleCartIcon() {
        if(cartItems.some(item => item.id === img.id)) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if(hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }
    
    return (
        <div 
            className={`${getClassName(className)} image-container`}
            ref={mouseRef}
        >
           <img alt="product photos" src={img.url} className="image-grid" />
           {handleHeart()}
           {handleCartIcon()}
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