import { useState } from 'react'
import { ContextFavoritos } from './ContextFavoritos'

export const FavoritosProvider = ({ children }) => {
  // Cada favorito guarda: id, nombre, valor e imagen
  const [favoritos, setFavoritos] = useState([])

  const esFavorito = (id) => favoritos.some((fav) => fav.id === id)

  // Si ya está en favoritos lo quita, si no está lo agrega
  const toggleFavorito = (coin) => {
    if (esFavorito(coin.id)) {
      setFavoritos(favoritos.filter((fav) => fav.id !== coin.id))
    } else {
      setFavoritos([
        ...favoritos,
        {
          id: coin.id,
          nombre: coin.name,
          valor: coin.current_price,
          imagen: coin.image,
        },
      ])
    }
  }

  return (
    <ContextFavoritos.Provider value={{ favoritos, toggleFavorito, esFavorito }}>
      {children}
    </ContextFavoritos.Provider>
  )
}
