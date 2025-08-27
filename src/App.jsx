import React from "react";
import "./App.css";
import IconBar from "./components/IconBar";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import HoveringIcons from "./components/HoveringIcons";
import Home from "./components/Home";
import Polo from "./components/Polo";
import TShirts from "./components/TShirts";
import Sweat from "./components/Sweat";
import Jackets from "./components/Jackets";
import Pants from "./components/Pants";
import Para from "./components/Para";
import Accessories from "./components/Accessories";
import Account from "./components/Account";
import Save from "./components/Save";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <IconBar />
      <HoveringIcons />
      <Logo />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tshirts" element={<TShirts />} />
          <Route path="/polo" element={<Polo />} />
          <Route path="/sweat" element={<Sweat />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/jacket" element={<Jackets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/paradise" element={<Para />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Save />} />
          <Route path="/cart" element={<Cart />} />
          {/* Fallback */}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          {/*Product routing*/}
           <Route path="/product/:category/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
