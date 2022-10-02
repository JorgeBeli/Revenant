import { Link } from "react-router-dom"

const ProductsCards = ({id,name,price,size,color,img}) =>{
    return(
        <Link to={`./item/${id}`}>
            <div id={id} className='product__card'>
                <div className="img__wraper">
                    <img src={img} alt={name}></img>
                </div>
                <h2>{name}</h2>
                <p>${price}</p>
                <div className="sizes__wraper">
                    <p>Talles: {size.join(', ')}</p>
                </div>
                <div className="colors__wraper">
                    <p>Colores: {color.join(', ')}</p>
                </div>
                <div className="button__card">
                </div>
            </div>
        </Link>
    )
}


export default ProductsCards