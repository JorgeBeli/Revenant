import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import ProductsCards from "../ProductsCards";
import Loading from "../Loading";

const ListFirebase = () =>{

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getItem()
    }, [])

    const getItem = () =>{
        const db = getFirestore()
        const collectionRef = collection(db, "item")
        getDocs( collectionRef ).then(snapshot =>{
            const data = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})) 
            setItems(data)
            setLoading(false)
        })
    }
    
    return(
        <div className="product__cart__wraper">
            {loading ? <Loading/> :
            items.map(item => <ProductsCards key={item.id} {...item}/>)}
        </div>
    )
}

export default ListFirebase