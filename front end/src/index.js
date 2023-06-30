import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cart from "./components/pages/cart";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import SpareParts  from "./components/SpareParts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path="/spares" element={<SpareParts/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
  </BrowserRouter>
);
