import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Intro from './components/IntroIndex';
import Location from './components/Location';
import IndividualProduct from './components/ProductSolo';
import Error from './components/error';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path='/' element={<Intro/>} />
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/item/:id' element={<IndividualProduct/>}></Route>
                <Route path='/aboutUs' element={<Intro/>}></Route>
                <Route path='/location' element={<Location/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/user' element={<Intro/>}></Route>
                <Route path='*' element={<Error/>}></Route>
              </Routes>
          </BrowserRouter>
        </CartProvider>
      </header>
      <main>
      </main>
    </>
  );
}

export default App;