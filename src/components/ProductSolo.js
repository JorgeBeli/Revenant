import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IndividualProductCart from "./IndividualProductCart"
import Loading from "./Loading"

const IndividualProduct = () =>{

    const { id } = useParams()

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct()
    })

    const getProduct = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'item')
        const docRef = doc(productsCollection, id)
        getDoc( docRef ).then(snapshot => {
            setProduct(snapshot.data())
            setLoading(false)
        })
    }
    
    return(
        <div className="individual__card">
            {loading? <Loading/> : <IndividualProductCart key={id} {...product}/>}
        </div>
    )
}

export default IndividualProduct