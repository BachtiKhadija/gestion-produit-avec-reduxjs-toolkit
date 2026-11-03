import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: []
};
const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    // Ajouter un produit au panier
    addToCart: (state,action) => {
      const produit = state.items.find(p => p.ref === action.payload.ref);
      if (produit) {
        produit.quantite += 1;
      } else {
        state.items.push({...action.payload,quantite: 1});
      }
    },
    // Supprimer un produit du panier
    RemoveFromCart: (state, action) => {
      state.items = state.items.filter(p => p.ref !== action.payload);
    },
    // Augmenter la quantité
    IncrementQte: (state, action) => {
      const produit = state.items.find(
        p => p.ref === action.payload
      );

      if (produit) {
        produit.quantite += 1;
      }
    },

    // Diminuer la quantité
    DecrementQte: (state, action) => {
      const produit = state.items.find(
        p => p.ref === action.payload
      );

      if (produit) {
        produit.quantite -= 1;
      }
      state.items = state.items.filter(p => p.quantite > 0);
    },

    // Vider le panier
    ClearCart: (state) => {
      state.items = [];
    }

  }
});

export const {
  addToCart,
  RemoveFromCart,
  IncrementQte,
  DecrementQte,
  ClearCart
} = panierSlice.actions;

export default panierSlice.reducer;
