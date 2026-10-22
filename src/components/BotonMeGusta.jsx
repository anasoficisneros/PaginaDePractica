import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ContextFavoritos } from '../context/ContextFavoritos'

export const BotonMeGusta = ({ coin }) => {

  const{ toggleFavorito, esFavorito }= useContext(ContextFavoritos)

  const meGusta = esFavorito(coin.id)

  return (


    <IconButton onClick={() => toggleFavorito(coin)} sx={{ color: '#e91e63' }}>
      {meGusta ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>


  )
}
