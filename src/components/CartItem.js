import {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {

    const {removeFromCart} = useContext(Context)
    const [hovered, mouseRef] = useHover()

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

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

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem