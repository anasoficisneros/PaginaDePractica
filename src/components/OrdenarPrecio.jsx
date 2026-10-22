import React from 'react'
import Button from '@mui/material/Button'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export const OrdenarPrecio = ({ setOrden }) => {
  return (
    <div>
      <h4>Ordenar por precio</h4>
      <Button
        variant="contained"
        startIcon={<ArrowUpwardIcon />}
        sx={{ bgcolor: '#6a1b9a', mb: 1, width: '100%' }}
        onClick={() => setOrden('asc')}
      >
        Ascendente
      </Button>
      <Button
        variant="contained"
        startIcon={<ArrowDownwardIcon />}
        sx={{ bgcolor: '#6a1b9a', width: '100%' }}
        onClick={() => setOrden('desc')}
      >
        Descendente
      </Button>
    </div>
  )
}