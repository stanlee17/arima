import axios from 'axios';

export const apiBaseUrl: string = 'https://api.jikan.moe/v4';

export const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4/',
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
