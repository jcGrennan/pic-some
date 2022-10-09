import {useContext} from "react"
import {Context} from "../Context"

function Cart() {

    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <h3 key={item.id}>{item.id}</h3>
    ))

    return (
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
        </main>
    )
}

export default Cart