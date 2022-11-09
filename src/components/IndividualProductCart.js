import { useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "./CartContext"
import Swal from "sweetalert2"

const IndividualProductCart = ({ title, price, img, stock }) => {

    const { addToCart } = useCart()
    const { id } = useParams()
    const [ counter, setCounter ] = useState( 0 )

    const addHandler = () => {
        addToCart({ title, price, img, id, counter })
        Swal.fire({
            title: 'Product added',
            icon: 'success',
            toast: true,
            position: "bottom-end",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
        })
    }

    const restCounterHandler = () => {
        if( counter !== 0 ){
            setCounter( counter - 1 )
        }
    }

    const addCounterHandler = () => {
        setCounter( counter + 1 )
    }

    return(
        <div className="individual__product__cart">
            <div className="individual__img">
                <img src={ img } alt={ title }></img>
            </div>
            <div className="individual__text">
                <div className="text__title">
                    <h2>{ title }</h2>
                </div>
                <div className="text__info">
                    <p>Price: ${ price }</p>
                    <p>Stock: { stock }</p>
                    <p>Description: </p>
                    <p>tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est</p>
                    <div className="quantity__container">
                        <button className="rest__counter" onClick={ restCounterHandler }> - </button>
                        <p>{ counter }</p>
                        <button className="add_counter" onClick={ addCounterHandler }> + </button>
                    </div>
                    <button className="addCart__button" onClick={ addHandler } disabled={ counter === 0 ? true:false }>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default IndividualProductCart