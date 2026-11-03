import { Link } from "react-router-dom";

const Navbar=()=>{   
  return (
    <nav className="navbar navbar-expand navbar-light bg-light border-bottom mb-4">
      <div className="container">

        <Link to="/prouits" className="navbar-brand fw-bold">
          Gestion Produits
        </Link>

        <ul className="navbar-nav ms-auto flex-row gap-3">

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Liste des produits
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Ajouter un produit
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
