// importing context hook, my context, PropTypes dependency, and custom hook
import {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

/* composing the Image component with a parameter object
className and img param object properties are coming
from the mapping taking place in the Photos page */
function Image({className, img}) {

    // pulling hovered and mouseRef from custom hook
    const [hovered, mouseRef] = useHover()
    
    // pulling necessary states and functions from Context
    const {
        toggleFavorite, 
        cartItems, 
        addToCart, 
        removeFromCart
    } = useContext(Context)

    // declaring function to determine image classnames for photogrid styling
    function getClassName(i) {
        if(i % 5 === 0) {
            return "big"
        }
        else if(i % 6 === 0) {
            return "wide"
        }
    } 

    /* declaring a function to display an empty heart when hovered 
    and a filled heart all the time when favorited*/
    function handleHeart() {
        const handleClick = () => toggleFavorite(img.id)
        
        if(img.isFavorite) {
            return <i onClick={handleClick} className="ri-heart-fill favorite"></i>
        } else if(hovered) {
            return <i onClick={handleClick} className="ri-heart-line favorite"></i>
        }
    }

    /* declaring a function to display a plus when hovered and a cart 
    all the time when added to the cart */
    function handleCartIcon() {
        if(cartItems.some(item => item.id === img.id)) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if(hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }
    
    // composing jsx for Image component
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

/* using propTypes to ensure correct params are being passed,
and all required params are being passed */
Image.propTypes = {
    className: PropTypes.number,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        url: PropTypes.string.isRequired
    })
}

// exporting Image component to be used in Photos page
export default Image