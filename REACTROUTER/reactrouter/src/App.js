import './App.css';
//1 - config react rout.
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

// pages import
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            
            <Route path='/products/:id' element={<Product />} />

            {/* Nested Route */}
            <Route path='/products/:id/info' element={<Info />} />
            
            {/* No mach route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;