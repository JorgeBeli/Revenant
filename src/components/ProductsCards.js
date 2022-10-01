const ProductsCards = ({id,name,price,size,color}) =>{
    return(
        <div id={id} className='product__card'>
            <h2>{name}</h2>
            <p>${price}</p>
            <div>
                <p>Talles: {size.join(', ')}</p>
            </div>
            <div>
                <p>Colores: {color.join(', ')}</p>
            </div>
        </div>
    )
}


export default ProductsCards