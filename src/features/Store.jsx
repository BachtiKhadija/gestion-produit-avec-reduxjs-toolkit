
import { configureStore } from "@reduxjs/toolkit";
import produitReducer from "./ProduitSlice";
import panierReducer from "./PanierSlice";


const Store = configureStore({
  reducer: {
    produit: produitReducer,
    panier: panierReducer,


  }
});

/*
nouvelle structure du store  
{
  produit: {
    produits: [],
    search: "",
    categorie: "Toutes"
  },

  panier: {
    items: []
  }
}





*/
export default Store;
