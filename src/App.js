import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import Cart from './pages/Cart';
import AllProduct from './pages/AllProduct';
import ProductDetailpage from './pages/ProductDetailpage';
import PaymentPage from './pages/PaymentPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/allproduct' element={<AllProduct/>}></Route>
      <Route path='/productDetails' element={<ProductDetailpage/>}></Route>
      <Route path='/paymentpage' element={<PaymentPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
