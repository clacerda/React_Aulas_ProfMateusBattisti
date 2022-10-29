import './App.css';
//1 - config react rout.
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

// pages import
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Products/:id' element={<Product />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;