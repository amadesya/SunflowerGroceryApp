import { Product } from '@/entities/product';
import axios, { type AxiosResponse } from 'axios';

export const getProducts = (): Promise<AxiosResponse<Product[]>> =>
  axios.get<Product[]>(
    'https://6a77b696f0f1cdf392240fcd.mockapi.io/api/products/products',
  );
