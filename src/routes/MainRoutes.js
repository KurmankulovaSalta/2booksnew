import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import Register from "../components/auth/Register/Register";
import Login from "../components/auth/Login/Login";
import EditPassword from "../components/auth/EditPassword/EditPassword";
import AddProduct from "../components/product/AddProduct";
import ProductList from "../components/product/ProductList";
import Partnership from "../Pages/FootersPage/Partnership/Partnership";
import Services from "../Pages/FootersPage/Services/Services";
import AboutUs from "../Pages/FootersPage/AboutUs/AboutUs";

import EditProduct from "../components/product/EditProduct";
import DetailsProduct from "../components/product/DetailsProduct";
import OnlineRead from "../components/product/OnlineRead";
import EditPassword2 from "../components/auth/EditPassword/EditPassword2";
import Cart from "../components/Cart/Cart";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/details/:id" element={<DetailsProduct />} />
        <Route path="/online-read/:id" element={<OnlineRead />} />
        <Route path="/edit-password" element={<EditPassword />} />
        <Route path="/edit-password-page-2" element={<EditPassword2 />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
