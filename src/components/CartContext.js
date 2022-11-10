import { createContext, useContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addToCart: () => {},
    clearCart: () => {},
    removeFromCart: () => {}
})

const useCart = () =>{
    return useContext( CartContext ) 
}

const CartContextProvider = ( { children } ) => {
    
    const [products, setProducts] = useState([])

    const addToCart = ( product ) => {
        setProducts( products => [...products, product])
    }

    const clearCart = () => {
        setProducts([])
    }

    const removeFromCart = ( id ) => {
        const newProducts = products.filter((item) => item.id !== id )
        setProducts(newProducts)
    }

    const context = {
        products: products,
        addToCart: addToCart,
        clearCart: clearCart,
        removeFromCart: removeFromCart
    }

    return (
        <CartContext.Provider value={ context }>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartContextProvider }