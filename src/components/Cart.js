import { useCart } from "./CartContext"
import ProductsCart from "./ProductsCart"
import Swal from "sweetalert2"

const CreateOrder = () =>{

    const { products } = useCart()

    const user = {name: 'Juan', phone: 16516656, email: 'juan@gmail.com'}

    const createOrder = {
        buyer: user,
        items: [products],
        total: 0
    }
}

const Cart = () =>{

    const { products, clearCart } = useCart()

    const clearHandler = () =>{
        clearCart([])
        Swal.fire({
            title: 'Cart cleared',
            icon: 'success',
            toast: true,
            position: "bottom-end",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
        })
    }

    return (
        <div className="cart__wraper">
            <h2>Your products</h2>
            <div className="products__cart">
                {products.length === 0 ? <h3>It is empty :(</h3>: products.map( item => <ProductsCart key={item.id} {...item}></ProductsCart>)}
                {products.length === 0 ? <p>add something :)</p> :  <div>
                        <button onClick={clearHandler}>Clear cart</button>
                        <button onClick={CreateOrder}>Buy</button>
                      </div>}               
            </div>
        </div>
    )
}   

export default Cart