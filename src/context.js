import {createContext, useState, useEffect} from "react";

const Context = createContext() 

function ContextProvider({children}) {

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

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

    function addToCart(newItem) {
        setCartItems(prevCart => [...prevCart, newItem])
    }

    function removeFromCart(deleted) {
        setCartItems(prevCart => {
            const newCart = prevCart.filter(item => item.id !== deleted.id)
            return newCart
        })
    }

    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, addToCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}