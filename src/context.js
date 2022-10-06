import {createContext, useState} from "react";

const Context = createContext() 

function ContextProvider({children}) {

    const [photos, setPhotos] = useState()

    return (
        <Context.Provider value={{photos, setPhotos}}>{children}</Context.Provider>
    )
}

export {ContextProvider, Context}