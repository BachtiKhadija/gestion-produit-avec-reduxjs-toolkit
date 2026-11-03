
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {deleteProduit,searchProduit,filterByCategory} from "../features/ProduitSlice";

const List=()=>{

  const dispatch = useDispatch();

  // Récupérer les données depuis Redux
  const { produits, search, categorie } = useSelector(
    state => state.produit
  );

  // Supprimer un produit
  const handleDelete = (ref) => {

    if (window.confirm("Voulez-vous supprimer ce produit ?")) {
      dispatch(deleteProduit(ref));
    }

  };

  // Recherche
const produitsRecherches = produits.filter(p => p.intitule.toLowerCase().includes(search.toLowerCase()));
//filtre produit 
const produitsFiltres = produitsRecherches.filter(p => categorie === "Toutes" || p.categorie === categorie);
//const produitsFiltres = produitsRecherches.filter(p => (categorie === "Toutes")?p:(p.categorie === categorie));
  // Récupérer les catégories disponibles
  const categories = [ ...new Set(produits.map(p => p.categorie))];

  return (

    <div className="container">

      {/* Titre et bouton Ajouter */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="text-primary">
          Liste des produits
        </h2>

        <Link
          to="/add"
          className="btn btn-success"
        >
          + Ajouter un produit
        </Link>

      </div>

      {/* Recherche et filtre */}
      <div className="card shadow-sm mb-4">

        <div className="card-body">

          <div className="row g-3">

            {/* Recherche */}
            <div className="col-md-6">

              <label className="form-label">
                Rechercher un produit
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Entrer l'intitulé..."
                value={search}
                onChange={(e) =>
                  dispatch(searchProduit(e.target.value))
                }
              />

            </div>

            {/* Filtre par catégorie */}
            <div className="col-md-6">

              <label className="form-label">
                Filtrer par catégorie
              </label>

              <select
                className="form-select"
                value={categorie}
                onChange={(e) =>
                  dispatch(filterByCategory(e.target.value))
                }
              >

                <option value="Toutes">
                  Toutes les catégories
                </option>

                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}

              </select>

            </div>

          </div>

        </div>
      </div>

      {/* Tableau des produits */}
      <div className="card shadow">

        <div className="card-header bg-primary text-white">

          <h5 className="mb-0">
            Produits disponibles
          </h5>

        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover table-striped align-middle text-center">

              <thead className="table-dark">

                <tr>
                  <th>Référence</th>
                  <th>Intitulé</th>
                  <th>Prix</th>
                  <th>Catégorie</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {produitsFiltres.length > 0 ? (

                  produitsFiltres.map(p => (

                    <tr key={p.ref}>

                      <td>{p.ref}</td>

                      <td>{p.intitule}</td>

                      <td>
                        {p.prix} DH
                      </td>

                      <td>
                        <span className="badge bg-info text-dark">
                          {p.categorie}
                        </span>
                      </td>

                      <td>

                        <img
                          src={p.photo}
                          alt={p.intitule}
                          className="img-thumbnail"
                          style={{
                            width: "80px",
                            height: "60px",
                            objectFit: "contain"
                          }}
                        />

                      </td>

                      <td>

                        <div className="d-flex justify-content-center gap-2">

                          {/* Modifier */}
                          <Link
                            to={`/edit/${p.ref}`}
                            className="btn btn-warning btn-sm"
                          >
                            Modifier
                          </Link>

                          {/* Supprimer */}
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(p.ref)}
                          >
                            Supprimer
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="6" className="text-danger py-4">
                      Aucun produit trouvé !
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

          {/* Nombre de produits */}
          <div className="text-end mt-3">

            <span className="badge bg-primary fs-6">
              Nombre de produits : {produitsFiltres.length}
            </span>

          </div>

        </div>
      </div>

    </div>

  );
}

export default List;
