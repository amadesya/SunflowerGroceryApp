import axios from "axios";

export const getProducts = () =>
  axios.get(
    "https://6a77b696f0f1cdf392240fcd.mockapi.io/api/products/products",
  );
