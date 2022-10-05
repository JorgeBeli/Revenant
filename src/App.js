import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Intro from './components/IntroIndex';
import Location from './components/Location';
import IndividualProduct from './components/ProductSolo';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Intro/>} />
              <Route path='/products' element={<Products/>}/>
              <Route path='/products/item/:id' element={<IndividualProduct/>}></Route>
              <Route path='/aboutUs' element={<Intro/>}></Route>
              <Route path='/location' element={<Location/>}></Route>
              <Route path='/cart' element={<Intro/>}></Route>
              <Route path='/user' element={<Intro/>}></Route>
            </Routes>
        </BrowserRouter>
      </header>
      <main>
      </main>
    </>
  );
}

export default App;