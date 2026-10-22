import { useState } from 'react'
import { ContextAutor } from './ContextAutor'

export const AutoProvider = ({ children }) => {
  const [autor, setAutor] = useState('Nobby')
  return (
    <ContextAutor.Provider value={{ autor, setAutor }}>
      {children}
    </ContextAutor.Provider>
  )
}
