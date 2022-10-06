import {createContext} from "react";

const Context = createContext() 

function ContextProvider() {
    return (
        <Context.Provider value=""></Context.Provider>
    )
}

export {ContextProvider, Context}