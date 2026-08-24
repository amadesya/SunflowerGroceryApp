import { cartSlice } from "../entities/cart/model/cart.slice";

export const rootActions = {
  ...cartSlice.actions,
};
