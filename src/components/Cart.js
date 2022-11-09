import { useCart } from "./CartContext"
import ProductsCart from "./ProductsCart"
import ButtonTotalCart from "./ButtonTotalCart"

const Cart = () =>{

    const { products } = useCart()

    return (
        <div className="cart__wraper">
            <h2>Your products</h2>
            <div className="products__cart">
                {products.length === 0 ? <h3>It is empty :(</h3>: products.map( item => <ProductsCart key={item.id} {...item}></ProductsCart>)}
                {products.length === 0 ? <p>add something :)</p> : <ButtonTotalCart/> }
            </div>
        </div>
    )
}   

export default Cart