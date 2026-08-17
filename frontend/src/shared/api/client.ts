import { create } from 'axios';

export const API_PREFIX = 'https://api.example.com';

export const apiClient = create({
  baseURL: API_PREFIX,
});
