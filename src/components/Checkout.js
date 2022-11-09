import { useCart } from "./CartContext"
import ItemListContainer from "./ItemListContainer"

const Checkout = ( ) => {

    const { products } = useCart()

    const preventHandler = (e) => {
        e.preventDefault()
    }

    return(
        <div>
            <ItemListContainer greeting="Checkout"/>
            <div className="checkout__wraper">
                <div className="checkoutForm__container">
                    <div className="checkoutDetail">
                        <h2>Enter your data to complete the purchase: </h2>
                    </div>
                    <form className="checkoutForm">
                        <label htmlFor="name"></label>
                        <input id="name" type="text" placeholder="Full name *" required></input>
                        
                        <label htmlFor="email"></label>
                        <input id="email" type="email" placeholder="Email *" required></input>

                        <label htmlFor="adress"></label>
                        <input id="adress" type="text" placeholder="Your adress *" required></input>

                        <label htmlFor="submit">
                            <input onSubmit={ preventHandler } id="submit" type="submit" value="Purchase"></input>
                        </label>
                    </form>
                </div>
                <div className="checkoutInformation__wraper">
                    <h2>Detail of the purchase: </h2>
                    <div className="checkoutDetail__container">
                        <div>
                            <p>Total items: </p>
                            <p>{ products.reduce((total, item) => total + item.counter, 0) }</p>
                        </div>
                        <div>
                            <p>Shipping cost: </p>
                            <p>$ { ((products.reduce((total, item) => total + (item.price * item.counter),0)) * 15 / 100).toLocaleString('en').replace(',','.') }</p>
                        </div>
                        <div>
                            <p>Total amount: </p>
                            <p>$ { (products.reduce((total, item) => total + (item.price * item.counter),0) + ((products.reduce((total, item) => total + (item.price * item.counter),0)) * 15 / 100)).toLocaleString('en').replace(',','.') }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout