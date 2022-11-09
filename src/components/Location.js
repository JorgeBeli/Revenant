import ItemListContainer from "./ItemListContainer"

const Location = () =>{
    return(
        <div className="location__container">
            <ItemListContainer greeting={'Our Locations'}/>
            <div className="locations__wraper">
                <div className="location__norcenter">
                    <iframe title="norcent" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13150.16774936242!2d-58.54109316044926!3d-34.51449529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0e91dbd2e57%3A0x5b6ffc4e2b24596a!2sNorcenter!5e0!3m2!1ses-419!2sar!4v1664730667139!5m2!1ses-419!2sar"></iframe>
                    <div className="norcenter__text">
                        <h3>Norcenter</h3>
                        <p>In Norcenter we have our first local, and here you can buy everything you want with the best quality in the market with the best price.</p>
                    </div>
                </div>
                <div className="location__unicenter">
                    <iframe title="unicenter" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13150.16774936242!2d-58.54109316044926!3d-34.51449529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0ee292497e9%3A0xf9a611e58747f528!2sUnicenter!5e0!3m2!1ses-419!2sar!4v1664731436295!5m2!1ses-419!2sar"></iframe>
                    <div className="unicenter__text">
                        <h3>Unicenter</h3>
                        <p>In Unicenter we have our second local, in this local we have the best sportwear in the market and obviously with the best price.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location