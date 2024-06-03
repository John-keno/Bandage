import { createSlice } from "@reduxjs/toolkit";

function fetchProducts() {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
}

function storeProducts(data) {
  localStorage.setItem("cart", JSON.stringify(data));
}

function storeAmount(data) {
  localStorage.setItem("amount", data.toString());
}

function fetchAmount() {
  let amount = localStorage.getItem("amount");
  if (amount) {
    return parseInt(amount);
  } else {
    return 0;
  }
}

const initialState = {
  cartItems: fetchProducts(),
  amount: fetchAmount(),
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      storeProducts(product);
      storeAmount((state.amount += 1));
    },
    clearCart: () => {
      storeProducts([]);
      storeAmount(0);
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    increaseItem: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id);
      product.amount = product.amount + 1;
    },
    decreaseItem: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id);
      product.amount = product.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const {
  addToCart,
  clearCart,
  removeProduct,
  decreaseItem,
  increaseItem,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
