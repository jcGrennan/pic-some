// importing Hooks from react 
import {createContext, useState, useEffect} from "react";

// setting Context to a variable with the createContext Hook
const Context = createContext() 

/* composing a provider component for the context. Passing a children object as a parameter
so anything rendered inside the Provider can use Context*/
function ContextProvider({children}) {

    // setting up state to hold the photo objects and the photo objects added to cart, using the state Hook.
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    //using the Effect Hook to fetch the photos from a url, convert them to json and set the photos state to the data.
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    /* declaring a function that will toggle whether a photo is favorited by mapping over the previous photos state
    and comparing ids until the clicked one is found.*/
    function toggleFavorite(id) {
        setPhotos(prevPhotos => (
            prevPhotos.map(photo => (
                photo.id === id ? 
                    {
                        ...photo, 
                        isFavorite: !photo.isFavorite
                    } :
                    photo
            ))
        ))
    }

    // declaring a function that will add the clicked photo to the cart by spreading the previous cart first then adding the clicked photo.
    function addToCart(newItem) {
        setCartItems(prevCart => [...prevCart, newItem])
    }

    /* declaring a function that will remove the specified photo from the cart by filtering the cart and only letting 
    the photos whose id does not match, the specified photo, through.*/ 
    function removeFromCart(id) {
        setCartItems(prevCart => prevCart.filter(item => item.id !== id))
    }

    //composing the provider using the context property, "Provider", and passing the context through the value attribute.
    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, setCartItems, addToCart, removeFromCart}}>
            {children} {/* The children object parameter so the App can receive context when rendered. */}
        </Context.Provider>
    )
}

//exporting the Context Provider Component and the Context itself as separate named exports
export {ContextProvider, Context}