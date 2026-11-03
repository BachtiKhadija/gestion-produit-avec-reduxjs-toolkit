import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {addProduit,updateProduit} from "../features/ProduitSlice";

const ProduitForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const produits = useSelector( state => state.produit.produits);

  const produit = produits.find(p => p.ref === Number(id));

  const [form, setForm] = useState({ref: "",intitule: "", prix: "", categorie: "", photo: ""});

  // Charger le produit en mode modification
  useEffect(() => {
    if (produit) {
      setForm(produit);
    }
  }, [id, produit]);

  // Gérer les changements des champs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value
    });
  };

  // Ajouter ou modifier un produit
  const handleSubmit = (e) => {
    e.preventDefault();

    const nouveauProduit = {
      ...form,
        ref: Number(form.ref),
        prix: Number(form.prix)
  
    };

    if (id) {
      dispatch(updateProduit(nouveauProduit));
    } else {

      const existe = produits.some(
        p => p.ref === Number(form.ref)
      );

      if (existe) {
        alert("Cette référence existe déjà !");
        return;
      }

      dispatch(addProduit(nouveauProduit));
    }

    navigate("/");
  };

  if (id && !produit) {
    return (
      <div className="alert alert-danger">
        Produit introuvable !
      </div>
    );
  }

  return (
    <div className="row justify-content-center">

      <div className="col-md-6">

        <div className="card shadow-sm">

          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">
              {id ? "Modifier un produit" : "Ajouter un produit"}
            </h4>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Référence</label>
                <input
                  type="number"
                  name="ref"
                  className="form-control"
                  value={form.ref}
                  onChange={handleChange}
                  disabled={!!id}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Intitulé</label>
                <input
                  type="text"
                  name="intitule"
                  className="form-control"
                  value={form.intitule}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Prix</label>
                <input
                  type="number"
                  name="prix"
                  className="form-control"
                  value={form.prix}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Catégorie</label>
                <select
                  name="categorie"
                  className="form-select"
                  value={form.categorie}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisir une catégorie</option>
                  <option value="Informatique">Informatique</option>
                  <option value="Telephonie">Téléphonie</option>
                  <option value="Accessoires">Accessoires</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Photo (URL)</label>
                <input
                  type="text"
                  name="photo"
                  className="form-control"
                  value={form.photo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex gap-2">

                <button type="submit" className="btn btn-success">
                  {id ? "Modifier" : "Ajouter"}
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/")}
                >
                  Annuler
                </button>

              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduitForm;
