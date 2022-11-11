// importing hooks for state and context, pulled context from context file, and the CartItem component
import {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


// composing Cart Page
function Cart() {

    // pulling cartItems state from context, and setting up state to calculate total cost
    const {cartItems, setCartItems} = useContext(Context)
    const total = (cartItems.length * 4.99).toLocaleString("en-IE", {style:"currency", currency:"EUR"})
    
    // mapping cart items to individual CartItem components
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
     
    // setting up state to determine whether mock ordering is taking place
    const [isOrdering, setIsOrdering] = useState(false)

    // declaring a function to act as a mock order placement using timeout
    function placeOrder() {
        setIsOrdering(true)
        setTimeout(() => {
            alert("Order Placed")
            setCartItems([])
            setIsOrdering(false)
        }, 3000)
    }

    /* composing the jsx for the page using conditional rendering to 
    to determine what is displayed depending on whether ordering is taking place
    and if there are items in the cart. */
    return (
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                {isOrdering && 
                    <button disabled={true}>Ordering...</button>
                }
                {cartItems.length > 0 && !isOrdering && 
                    <button onClick={placeOrder}>Place Order</button>
                }
            </div>
        </main>
    )
}

// exporting the Cart page to be routed in the App
export default Cart