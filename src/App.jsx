import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./Components/List";
import ProduitForm from "./Components/ProduitForm";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

const App=()=> {

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route path="/" element={<List />} />

          <Route path="/produits" element={<List />} />

          <Route path="/add" element={<ProduitForm />} />

          <Route path="/edit/:id" element={<ProduitForm />} />

          <Route path="/cart" element={<Cart />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
