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
        <div>
            <h2>{name}</h2>
            <div>
                <img src={img} alt={name}></img>
            </div>
            <div>
                <p>${price}</p>
                <p>Sizes: {size}</p>
                <p>Colors: {color}</p>
            </div>
        </div>
    )
}

export default IndividualProduct