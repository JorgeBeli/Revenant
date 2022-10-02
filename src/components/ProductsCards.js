const ProductsCards = ({id,name,price,size,color,img}) =>{
    return(
        <div id={id} className='product__card'>
            <div className="img__wraper">
                <img src={img}></img>
            </div>
            <h2>{name}</h2>
            <p>${price}</p>
            <div className="sizes__wraper">
                <p>Talles: {size.join(', ')}</p>
            </div>
            <div className="colors__wraper">
                <p>Colores: {color.join(', ')}</p>
            </div>
        </div>
    )
}


export default ProductsCards