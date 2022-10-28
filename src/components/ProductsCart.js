const ProductsCart = ({id,img, name, price}) =>{
    const quantityInput = document.getElementById('quantity')

    const handleChange = () =>{
        console.log(price * quantityInput?.value)
    }

    return(
        <div className="product__cart">
            <div className="product__img">
                <img src={img} alt={name}></img>
            </div>
            <div className="product__text">
                <h4>{name}</h4>
                <input onChange={handleChange} id="quantity" type='number'></input>
            </div>
            <div className="product__price">
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ProductsCart