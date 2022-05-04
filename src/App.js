import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/containers/Home";
import Product from "./components/containers/Product";
import About from "./components/containers/About";
import NotFound from "./components/containers/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
        // console.log("voir data", response)
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  return isLoading === true ? (<div>En cours de chargement ...</div>) :
    (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;