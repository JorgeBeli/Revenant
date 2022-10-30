import { Link } from "react-router-dom"

const ProductsCards = ({id,title,price,stock,img}) =>{
    return(
        <Link to={`./item/${id}`}>
            <div id={id} className='product__card'>
                <h2>{title}</h2>
                <img src={img} alt={title}></img>
                <p>Price: ${price}</p>
                <p>Stock: {stock}</p>
            </div>
        </Link>
    )
}


export default ProductsCards