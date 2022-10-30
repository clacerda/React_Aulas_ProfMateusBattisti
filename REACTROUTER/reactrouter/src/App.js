import './App.css';
//1 - config react rout.
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// pages import
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
        <Navbar />

        <SearchForm/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            
            <Route path='/products/:id' element={<Product />} />

            {/* Nested Route */}
            <Route path='/products/:id/info' element={<Info />} />
            
            {/* Search */}
            <Route path='/search' element={<Search />} />

            {/* No mach route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;