import { createContext } from 'react'

export const ContextFavoritos = createContext({
  favoritos: [],
  toggleFavorito: () => {},
  esFavorito: () => false,
})
