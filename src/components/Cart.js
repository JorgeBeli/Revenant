import { useProducts } from "../context/CartContext"
import ProductsCart from "./ProductsCart"

const Cart = () =>{

    const { productsCart } = useProducts()

    return (
        <div className="cart__wraper">
            <h2>Your products</h2>
            <div className="products__cart">
                {productsCart.length === 0 ? <h3>It is empty :(</h3>: productsCart.map( item => <ProductsCart key={item.id} {...item}></ProductsCart>)}
            </div>
        </div>
    )
}   

export default Cart