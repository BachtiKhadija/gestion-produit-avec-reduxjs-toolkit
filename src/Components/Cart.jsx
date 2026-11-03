
import { useSelector, useDispatch } from "react-redux";
import {RemoveFromCart,IncrementQte,DecrementQte,ClearCart} from "../features/PanierSlice";

const Cart = () =>   {

  const dispatch = useDispatch();

  const items = useSelector(
    state => state.panier.items
  );

  // Calcul du total
  const total = items.reduce(
    (somme, p) => somme + p.prix * p.quantite,
    0
  );

  return (
    <div className="container">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h3 className="text-primary">
          Mon panier
        </h3>

        {items.length > 0 && (
          <button
            className="btn btn-danger"
            onClick={() => dispatch(ClearCart())}
          >
            Vider le panier
          </button>
        )}

      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          {items.length === 0 ? (

            <div className="alert alert-info mb-0">
              Votre panier est vide !
            </div>

          ) : (

            <div className="table-responsive">

              <table className="table table-bordered table-hover align-middle text-center">

                <thead className="table-dark">
                  <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Sous-total</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {items.map(p => (

                    <tr key={p.ref}>

                      <td className="text-start">

                        <div className="d-flex align-items-center gap-2">

                          <img
                            src={p.photo}
                            alt={p.intitule}
                            width="60"
                            height="50"
                            style={{ objectFit: "contain" }}
                          />

                          <span>{p.intitule}</span>

                        </div>

                      </td>

                      <td>{p.prix} DH</td>

                      <td>

                        <div className="d-flex justify-content-center align-items-center gap-2">

                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() =>
                              dispatch(DecrementQte(p.ref))
                            }
                          >
                            -
                          </button>

                          <span className="fw-bold">
                            {p.quantite}
                          </span>

                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() =>
                              dispatch(IncrementQte(p.ref))
                            }
                          >
                            +
                          </button>

                        </div>

                      </td>

                      <td className="fw-bold">
                        {p.prix * p.quantite} DH
                      </td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            dispatch(RemoveFromCart(p.ref))
                          }
                        >
                          Supprimer
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

              <div className="text-end mt-3">

                <h4>
                  Total : <span className="text-success">
                    {total} DH
                  </span>
                </h4>

              </div>

            </div>

          )}

        </div>
      </div>

    </div>
  );
}

export default Cart;
