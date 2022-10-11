import {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {

    const {cartItems, setCartItems} = useContext(Context)
    const total = (cartItems.length * 4.99).toLocaleString("en-IE", {style:"currency", currency:"EUR"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
        
    const [isOrdering, setIsOrdering] = useState(false)

    function placeOrder() {
        setIsOrdering(true)
        setTimeout(() => {
            alert("Order Placed")
            setCartItems([])
            setIsOrdering(false)
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                {isOrdering && <button disabled={true}>Ordering...</button>}
                {cartItems.length > 0 && !isOrdering && <button onClick={placeOrder}>Place Order</button>}
            </div>
        </main>
    )
}

export default Cart