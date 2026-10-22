import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { PanelOpciones } from './PanelOpciones'
import { BotonMeGusta } from './BotonMeGusta'

export const Inicio = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [orden, setOrden] = useState('');
  const [limite, setLimite] = useState(100);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])

  let monedas = [...coins];

  if (orden === 'asc') {
    monedas.sort((a, b) => a.current_price - b.current_price);
  }
  if (orden === 'desc') {
    monedas.sort((a, b) => b.current_price - a.current_price);
  }

  monedas = monedas.slice(0, limite);

  return (
    <div style={{ marginRight: '240px' }}>
      <PanelOpciones setOrden={setOrden} limite={limite} setLimite={setLimite} />

      {monedas.map((coin) => {
        return (
          <div key={coin.id} style={{ display: 'flex', alignItems: 'center' }}>
            <a style={{ cursor: 'pointer', color: '#6a1b9a' }} onClick={() => navigate("/detail/" + coin.id)}> <p>{coin.id} - ${coin.current_price}</p> </a>
            <BotonMeGusta coin={coin} />
          </div>
        )
      })}
    </div>
  )
}