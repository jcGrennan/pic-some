import {createContext, useState} from "react";

const Context = createContext() 
const [photos, setPhotos] = useState()

function ContextProvider({children}) {
    return (
        <Context.Provider value={photos}>{children}</Context.Provider>
    )
}

export {ContextProvider, Context}