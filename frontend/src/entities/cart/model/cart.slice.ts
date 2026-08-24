import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/entities/product";

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
};

function recalculateTotals(state: CartState): void {
  state.totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalAmount = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product }>) => {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.product.id,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          product: action.payload.product,
          quantity: 1,
          price: action.payload.product.price,
        });
      }

      recalculateTotals(state);
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ productId: Product["id"] }>,
    ) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.productId,
      );

      recalculateTotals(state);
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<{ productId: Product["id"] }>,
    ) => {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.productId,
      );

      if (!existing) return;

      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.productId,
        );
      }

      recalculateTotals(state);
    },
    reset: (state) => {
      state.items = [];
      recalculateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, reset } =
  cartSlice.actions;

export default cartSlice.reducer;
