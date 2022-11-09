import { Link } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"

const FinishCheckout = () => {
    return(
        <div className="gratefulness__container">
            <ItemListContainer greeting="Thank You!"/>
            <div className="gratefulness__text">
                <p>Thank you for buying in Revenant :).</p>
                <p>In a short time your order will arrive at the door of your house :D</p>
            </div>
            <Link to='/'><p className="checkoutHome">Go to home</p></Link>
        </div>
    )
}

export default FinishCheckout