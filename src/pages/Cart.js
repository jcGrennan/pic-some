import {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {

    const [isOrdering, SetIsOrdering] = useState(false)
    const {cartItems} = useContext(Context)
    const total = (cartItems.length * 4.99).toLocaleString("en-IE", {style:"currency", currency:"EUR"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    return (
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                {isOrdering ? 
                    <button>Ordering...</button> :
                    <button>Place Order</button>
                }
            </div>
        </main>
    )
}

export default Cart