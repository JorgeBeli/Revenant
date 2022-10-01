import products from '../json/data.json'
import ProductsCards from './ProductsCards'

const Products = () => {
    return (
        <div className='products'>
            {products.map( item => <ProductsCards key={item.id} {...item}></ProductsCards>)}
        </div>
    )
}

export default Products