import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const navbar = () =>{
    return (
        <nav>
            <div className='options__nav-left'>
                <ul>
                    <li><Link to={'/products'}>Products</Link></li>
                    <li><Link to={'/aboutUs'}>About Us</Link></li>
                    <li><Link to={'/location'}>Location</Link></li>
                </ul>
            </div>
            <div className='logo__nav'>
                <h1><Link to={'/'}>Revenant</Link></h1>
            </div>
            <div className='options__nav-right'>
                <ul>
                    <li><Link to={'/cart'}><CartWidget/></Link></li>
                    <li><Link to={'/user'}><i className="fa-solid fa-user"></i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar