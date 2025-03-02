import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (prop) => {
    const [cartItems, setCarItems] = useState({})

    const addToCart = (itemId) => {
        if (cartItems[itemId]) {
            setCarItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCarItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]

    )

    const contextValue = {

        food_list,
        cartItems,
        setCarItems,
        addToCart,
        removeFromCart

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {prop.children}

        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
