import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { useCart } from "./CartContext"

const ButtonTotalCart = () => {

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

    return(
        <div className="bottomCart__wraper">
            <div className="buttonCart__wraper">
                <button onClick={clearHandler}> Clear cart </button>
                <p>Total amount: $ { (products.reduce((total, item) => total + (item.price * item.counter),0).toLocaleString('en').replace(',','.')) }</p>
                <Link to={ '/checkout' }><button>Finish buying</button></Link>
            </div>
        </div>
    )
}

export default ButtonTotalCart