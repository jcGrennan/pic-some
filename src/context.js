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

    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems}}>{children}</Context.Provider>
    )
}

export {ContextProvider, Context}