import { useCart } from "./CartContext"

const ProductsCart = ({ img, title, price, id, counter }) =>{

    const { removeFromCart } = useCart()

    const eliminateHandler = () => {
        removeFromCart( id )
    }

    return(
        <div className="product__cart" key={ id }>
            <div className="product__img">
                <img src={ img } alt={ title }></img>
            </div>
            <div className="productCart__info">
                <div className="product__text">
                    <h4>{ title }</h4>
                </div>
                <div className="product__price">
                    <p>$ { price.toLocaleString('en').replace(',','.') }</p>
                </div>
                <div>
                    <p>Units: { counter }</p>
                </div>
                <div>
                    <p>Total: $ { (price * counter).toLocaleString('en').replace(',','. ') }</p>
                </div>
                <p className="eliminateItemCart" onClick={ eliminateHandler }>
                    Eliminate
                </p>
            </div>
        </div>
    )
}

export default ProductsCart