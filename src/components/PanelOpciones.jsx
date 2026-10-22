import React from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { OrdenarPrecio } from './OrdenarPrecio'
import { LimiteMonedas } from './LimiteMonedas'

export const PanelOpciones = ({ setOrden, limite, setLimite }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          padding: 2,
          top: '64px',
        },
      }}
    >
      <h3>Opciones</h3>
      <Divider />

      <OrdenarPrecio setOrden={setOrden} />

      <Divider sx={{ my: 2 }} />

      <LimiteMonedas limite={limite} setLimite={setLimite} />

      <Divider sx={{ my: 2 }} />

      <Button
        variant="contained"
        color="error"
        onClick={() => {
          setOrden('')
          setLimite(100)
        }}
      >
        Borrar filtros
      </Button>
    </Drawer>
  )
}