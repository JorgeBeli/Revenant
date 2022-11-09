import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/IntroIndex';
import Location from './components/Location';
import IndividualProduct from './components/ProductSolo';
import Error from './components/error';
import Cart from './components/Cart';
import ListFirebase from './components/firebase/ListFirebase';
import Checkout from './components/Checkout';
import { CartContextProvider } from './components/CartContext';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path='/' element={<Intro/>} />
                <Route path='/products' element=  {<ListFirebase/>}/>
                <Route path='/products/item/:id' element={<IndividualProduct/>}></  Route>
                <Route path='/aboutUs' element= {<Intro/>}></Route>
                <Route path='/location' element=  {<Location/>}></Route>
                <Route path='/cart' element={<Cart/>} ></Route>
                <Route path='/user' element={<Intro/>}></Route>
                <Route path='/checkout' element=  {<Checkout/>}></Route>
                <Route path='*' element={<Error/>}></ Route>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </header>
      <main>
      </main>
    </>
  );
}

export default App;