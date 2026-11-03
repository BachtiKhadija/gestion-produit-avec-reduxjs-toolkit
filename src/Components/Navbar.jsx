
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const items = useSelector(
    state => state.panier.items
  );



  return (
    <nav className="navbar navbar-expand navbar-light bg-light border-bottom mb-4">

      <div className="container">

        <Link to="/" className="navbar-brand fw-bold">
          Gestion Produits
        </Link>

        <ul className="navbar-nav ms-auto flex-row gap-3">

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Produits
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Ajouter
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Panier
              <span className="badge bg-danger ms-1">
                {items.length}
              </span>
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;
