import {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

function CartItem({item}) {

    const {removeFromCart} = useContext(Context)
    const [iconClass, setIconClass] = useState("line")

    return (
        <div className="cart-item">
            <i 
                onMouseOver={() => setIconClass("fill")} 
                onMouseOut={() => setIconClass("line")} 
                onClick={() => removeFromCart(item.id)} 
                className={`ri-delete-bin-${iconClass}`}
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