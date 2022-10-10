import {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {

    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const total = (cartItemElements.length * 4.99).toLocaleString("en-IE", {style:"currency", currency:"EUR"})

    return (
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart