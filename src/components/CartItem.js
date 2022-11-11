// importing context hook, my context, PropTypes dependency, and custom hook
import {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"


// composing CartItem component. {item} parameter coming from Cart page mapping
function CartItem({item}) {

    /* pulling removeFromCart function from Context using context hook, 
    and hovered state and mouseRef ref from custom hook */
    const {removeFromCart} = useContext(Context)
    const [hovered, mouseRef] = useHover()

    // using ternary to determine bin icon based on hovered state
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    // composing Cart Item jsx
    return (
        <div className="cart-item">
            <i 
                onClick={() => removeFromCart(item.id)} 
                className={iconClassName}
                ref={mouseRef}
            ></i>
            <img alt="cart item" src={item.url} width="130px" />
            <p>€4.99</p>
        </div>
    )
}

// using propTypes to ensure item contains a url
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

// exporting CartItem component to be used in Cart page
export default CartItem