import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/JS/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/JS/NavBar";
import WishList from "./Components/JS/WishList";
import CartList from "./Components/JS/CartList";
import GreatProductPage from "./Components/JS/GreatProductPage";
import BlogPage from "./Components/JS/BlogPage";
import AboutUs from "./Components/JS/AboutUs";
import ContactUs from "./Components/JS/ContactUs";
import AdminPannel from "./Components/JS/AdminPannel";
import AdminPannelProduct from "./Components/JS/AdminPannelProduct";
import AdminPannelCarousel from './Components/JS/AdminPannelCarousel';
import ShopPage from "./Components/JS/ShopPage";
import ProductPage from "./Components/JS/ProductPage";
import LoginPage from "./Components/JS/LoginPage";
import NewAdminPannel from "./Components/JS/NewAdminPannel";
import NewAdminPannelP from "./Components/JS/NewAdminPannelP";
import NewAdminPannelC from "./Components/JS/NewAdminPannelC";


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<NewAdminPannel/>}/>
        <Route path="/admin/category" element={<NewAdminPannel/>}/>
        <Route path="/admin/product" element={<NewAdminPannelP/>}/> 
        <Route path="/admin/carousel" element={<NewAdminPannelC/>}/> 
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/cartlist" element={<CartList/>}/>
        <Route path="/product/great/:id" element={<GreatProductPage/>}/>
        <Route path="/product/selected/:id" element={<ProductPage/>}/>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        {/* <Route path="/admin" element={<AdminPannel/>}/>  
        <Route path="/admin/category" element={<AdminPannel/>}/>
        <Route path="/admin/product" element={<AdminPannelProduct/>}/>
        <Route path="/admin/carousel" element={<AdminPannelCarousel/>}/> */}
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
