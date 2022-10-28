import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ProductsCards from "../ProductsCards";

const ListFirebase = () =>{

    const [items, setItems] = useState([])

    useEffect(() =>{
        getItem()
    }, [])

    const getItem = () =>{
        const db = getFirestore()
        const collectionRef = collection(db, "item")
        getDocs( collectionRef ).then(snapshot =>{
            const data = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})) 
            setItems(data)
        })
    }

    const getItemFilter = () => {
        const db = getFirestore()
        const q = query(collection(db, "item"), where("price", ">", 9000))
        getDocs( q ).then(snapshot =>{
            snapshot.docs.map((doc) => <li key={doc.id}>{doc.title}</li>)
        })
    }
    
    return(
        <div>
            {items.map(item => <ProductsCards key={item.id} {...item}/>)}
        </div>
    )
}

export default ListFirebase