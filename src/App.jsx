import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "./Components/List";
import ProduitForm from "./Components/ProduitForm";
import Navbar from "./Components/Navbar";

const App=()=>  {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<List />} />
              <Route path="/produits" element={<List/>} />
            <Route path="/add" element={<ProduitForm />} />
            <Route path="/edit/:id" element={<ProduitForm />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
