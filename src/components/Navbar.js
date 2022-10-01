import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const navbar = () =>{
    return (
        <nav>
            <div className='options__nav-left'>
                <ul>
                    <li><Link to={'/products'}>Products</Link></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Location</a></li>
                </ul>
            </div>
            <div className='logo__nav'>
                <h1><Link to={'/'}>Revenant</Link></h1>
            </div>
            <div className='options__nav-right'>
                <ul>
                    <li><a href='#'><CartWidget/></a></li>
                    <li><a href='#'><i className="fa-solid fa-user"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar