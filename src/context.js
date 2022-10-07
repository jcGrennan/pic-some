import {createContext, useState, useEffect} from "react";

const Context = createContext() 

function ContextProvider({children}) {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Context.Provider value={{photos}}>{children}</Context.Provider>
    )
}

export {ContextProvider, Context}