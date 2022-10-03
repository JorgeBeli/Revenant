import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../json/data.json'

const IndividualProduct = () =>{
    const {id : itemId} = useParams()
    const [item, setItem] = useState({})

    useEffect(() =>{
        getDataProduct().then( res =>{
            setItem(res)
        })
    })
    
    const getDataProduct = () =>{
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(products.find(item => item.id === JSON.parse(itemId)))
            },1)
        })
    }

    let {name, price, size, color, img} = {...item}
    
    return(
        <div className="individual__card">
            <div className="individual__img">
                <img src={img} alt={name}></img>
            </div>
            <div className="individual__text">
                <div className="text__title">
                    <h2>{name}</h2>
                </div>
                <div className="text__info">
                    <p>${price}</p>
                    <p>Sizes: {size?.join(', ')}</p>
                    <p>Colors: {color?.join(', ')}</p>
                </div>
            </div>
        </div>
    )
}

export default IndividualProduct