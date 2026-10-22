import React from 'react'
import Button from '@mui/material/Button'

export const LimiteMonedas = ({ limite, setLimite }) => {
  return (
    <div>
      <h4>Mostrar: {limite} monedas</h4>

      <Button variant="outlined" onClick={() => setLimite(10)}>10</Button>
      <Button variant="outlined" onClick={() => setLimite(50)}>50</Button>
      <Button variant="outlined" onClick={() => setLimite(100)}>100</Button>
    </div>
  )
}