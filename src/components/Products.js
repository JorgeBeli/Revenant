import products from '../json/data.json'
import ProductsCards from './ProductsCards'
import ItemListContainer from './ItemListContainer'

const Products = () => {
    return (
        <div className='products__wraper'>
            <ItemListContainer greeting={'Our Products'}/>
            <div className='products'>
                {products.map( item => <ProductsCards key={item.id} {...item}></ProductsCards>)}
            </div>
        </div>
    )
}

export default Products