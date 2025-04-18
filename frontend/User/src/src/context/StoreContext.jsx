import { createContext, useState } from "react";
import { food_list } from "../assets/ok/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        food_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;