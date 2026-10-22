import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { ContextFavoritos } from '../context/ContextFavoritos'
import { BotonMeGusta } from './BotonMeGusta'

export const Favoritos = () => {
  const navigate = useNavigate();
  const { favoritos } = useContext(ContextFavoritos);

  if (favoritos.length === 0) {
    return <p>Aún no tienes monedas favoritas. Dale ❤ a una moneda en Home.</p>
  }

  return (
    <div>
      <h2>Mis favoritos</h2>

      {favoritos.map((fav) => {
        return (
          <div key={fav.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={fav.imagen} alt={fav.nombre} width={32} />
            <a style={{ cursor: 'pointer', color: '#6a1b9a' }} onClick={() => navigate("/detail/" + fav.id)}>
              <p>{fav.nombre} - ${fav.valor}</p>
            </a>
            {/* Al darle click aquí se quita de favoritos */}
            <BotonMeGusta coin={fav} />
          </div>
        )
      })}
    </div>
  )
}
