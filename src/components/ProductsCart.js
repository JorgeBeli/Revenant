const ProductsCart = ({ img, title, price, id, counter}) =>{

    const eliminateHandler = () => {
        
    }

    return(
        <div className="product__cart" key={ id }>
            <div className="product__img">
                <img src={ img } alt={ title }></img>
            </div>
            <div className="product__text">
                <h4>{ title }</h4>
            </div>
            <div className="product__price">
                <p>${ price }</p>
            </div>
            <div>
                <p>Quantity: { counter }</p>
            </div>
            <div>
                Total: ${ price * counter }
            </div>
            <p onClick={ eliminateHandler }>
                eliminar
            </p>
        </div>
    )
}

export default ProductsCart