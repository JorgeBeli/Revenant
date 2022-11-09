import Swal from "sweetalert2"
import { useCart } from "./CartContext"

const ButtonTotalCart = () => {

    const { products, clearCart } = useCart()

    const CreateOrder = () =>{

        const { products } = useCart()
    
        const user = {name: 'Juan', phone: 16516656, email: 'juan@gmail.com'}
    
        const createOrder = {
            buyer: user,
            items: [products],
            total: 0
        }
    }

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

    return(
        <div className="bottomCart__wraper">
            <div className="buttonCart__wraper">
                <button onClick={clearHandler}> Clear cart </button>
                <p>Total amount: ${ (products.reduce((total, item) => total + (item.price * item.counter),0).toLocaleString('en').replace(',','.')) }</p>
                <button onClick={CreateOrder}> Finish buying </button>
            </div>
        </div>
    )
}

export default ButtonTotalCart