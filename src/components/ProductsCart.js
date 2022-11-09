const ProductsCart = ({ img, title, price, id, counter}) =>{

    const eliminateHandler = () => {
        
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
                    <p>$ { (price).toLocaleString('en'). replace(',','.') }</p>
                </div>
                <div>
                    <p>Units: { counter }</p>
                </div>
                <div>
                    Total: $ { (price * counter).toLocaleString('en').replace(',','. ') }
                </div>
                <p className="eliminateItemCart" onClick={ eliminateHandler }>
                    Eliminate
                </p>
            </div>
        </div>
    )
}

export default ProductsCart