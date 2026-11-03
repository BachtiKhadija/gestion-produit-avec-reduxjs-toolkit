
import { createSlice } from "@reduxjs/toolkit";
//****************Initial State**************** */

const initialState = {
  produits: [
    {
      ref: 1,
      intitule: "Ordinateur",
      prix: 7500,
      categorie: "Informatique",
      photo: "https://placehold.co/100x80"
    },
    {
      ref: 2,
      intitule: "Telephone",
      prix: 3000,
      categorie: "Telephonie",
      photo: "https://placehold.co/100x80"
    }
  ],
  search: "",
  categorie: "Toutes"
};
//****************Initial State**************** */
const produitSlice = createSlice({
  name: "produit",
  initialState:initialState,
  reducers: {
     //Ajouter un produit
    addProduit: (state, action) => {
      state.produits.push(action.payload);//modifier une copie généré immer 
      console.table(state.produits);
    },

    // Supprimer un produit
    deleteProduit: (state, action) => {
      state.produits = state.produits.filter(
        p => p.ref !== action.payload
      );
    },

    // Modifier un produit
    updateProduit: (state, action) => {
      const index = state.produits.findIndex(
        p => p.ref === action.payload.ref
      );

      if (index !== -1) {
        state.produits[index] = action.payload;
      }
    },

    // Rechercher un produit
    searchProduit: (state, action) => {
      state.search = action.payload;
    },

    // Filtrer par catégorie
    filterByCategory: (state, action) => {
      state.categorie = action.payload;
    }
  }
});

export const {addProduit,deleteProduit,updateProduit,searchProduit,filterByCategory} = produitSlice.actions;

export default produitSlice.reducer;
