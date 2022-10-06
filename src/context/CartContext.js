import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

const useProducts = () =>{
    return useContext( CartContext )
}

const CartProvider = ( { children } ) =>{

    const [productsCart, setProducts] = useState([])

    const add = (prod) =>{
        setProducts(productsCart => productsCart.concat(prod)
        )
    }

    const context = {
        productsCart: productsCart, add
    }

    return (
        <CartContext.Provider value={context}>
            { children }
        </CartContext.Provider>
    )
}

export { useProducts, CartProvider}