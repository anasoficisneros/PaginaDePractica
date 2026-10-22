import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'

export const Detail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/' + id);
        const data = await res.json();
        setCoin(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        console.log('Termina');
      }
    };
    fetchCoin();
  }, [id]);

  if (!coin) return <div>Cargando...</div>

  return (
    <div>
      <h2>{coin.name}</h2>
      <img src={coin.image?.large} alt={coin.name} width={80} />
      <p>símbolo: {coin.symbol}</p>
      <p>precio: ${coin.market_data?.current_price?.usd}</p>
    </div>
  )
}
