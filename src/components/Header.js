// importing Link component for routing between pages, context hook, and my context
import {Link} from "react-router-dom"
import {useContext} from "react"
import {Context} from "../Context"


// composing Header component
function Header() {

    // pulling cart items from Context using context hook
    const {cartItems} = useContext(Context)

    // using cartItems length and a ternary to determine whether the cart icon is filled or not
    const cartClassName = cartItems.length ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"

    // composing jsx for Header component
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={cartClassName}></i></Link>
        </header>
    )
}

// exporting Header to be rendered in App
export default Header