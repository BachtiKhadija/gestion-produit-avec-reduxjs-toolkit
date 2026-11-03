
import { configureStore } from "@reduxjs/toolkit";
import produitReducer from "./ProduitSlice";

const Store = configureStore({
  reducer: {
    produit: produitReducer,


  }
});

export default Store;
