import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Our Products'}/>} />
            <Route path='/products' element={<Products/>} />
          </Routes>
        </BrowserRouter>
      </header>
      <main>
      </main>
    </>
  );
}

export default App;