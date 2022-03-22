import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import TryOn from './components/TryOn';
import TryOnDetails from './components/TryOnDetails';
import CartPage from './components/CartPage';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route index element={<Home />} /> {/*I was having "path= '/'", and now updated it with "index", both works fine */}
        <Route path= "/products" element={<Product />} />
        <Route path= "/tryon" element={<TryOn/>} />
        <Route path= "/products/:id" element={<ProductDetails />} />
        <Route path= "/cart" element={<CartPage />} />

        <Route path= "/products/tryon/:id" element={<TryOnDetails/>} />
        <Route path= "/about" element={<About/>} />
        {/* <Route path= "/contact" element={<Contact/>} /> */}
        <Route path= "*" element={<h2>404 Not Found!</h2>} />

      </Routes>
    <Footer />
    </>
  );
}

export default App;
