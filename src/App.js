import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// components : 
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Publish from "./components/Publish/Publish";

// pages : 
import About from "./pages/About";
import Offer from "./pages/Offer";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound";

import CheckoutForm from "./pages/CheckoutForm/CheckoutForm";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      // Action de connexion, retour d'un token par le Backend
      console.log("Création d'un cookie userToken")
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      // action de déconnexion 
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }
    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`)
  };

  return (
    <div className="App">
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/offer/publish" element={<Publish />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;