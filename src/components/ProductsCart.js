const ProductsCart = ({id,img, name, price}) =>{
    return(
        <div className="product__cart">
            <div className="product__img">
                <img src={img} alt={name}></img>
            </div>
            <div className="product__text">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ProductsCart