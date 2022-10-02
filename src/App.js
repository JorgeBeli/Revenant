import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Intro from './components/IntroIndex';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Intro/>} />
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      <main>
      </main>
    </>
  );
}

export default App;