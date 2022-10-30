import { useParams } from "react-router-dom"
import { useCart } from "./CartContext"

const IndividualProductCart = ({title, price, img, stock}) => {

    const { addToCart } = useCart()
    const { id } = useParams()

    const addHandler = () => {
        addToCart({ title, price, img, id })
    }
    return(
        <div className="individual__product__cart">
            <div className="individual__img">
                <img src={img} alt={title}></img>
            </div>
            <div className="individual__text">
                <div className="text__title">
                    <h2>{title}</h2>
                </div>
                <div className="text__info">
                    <p>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                    <button onClick={addHandler}>Add to cart</button>  
                </div>
            </div>
        </div>
    )
}

export default IndividualProductCart