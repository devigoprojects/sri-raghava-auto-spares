import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EngineOils from "./components/pages/EngineOils";
import Cart from "./components/pages/Cart";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import SpareParts  from "./components/SpareParts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/spares" element={<SpareParts/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/oils" element={<EngineOils/>}/>
    </Routes>
    
  </BrowserRouter>
);
