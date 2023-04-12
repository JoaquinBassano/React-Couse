import { useContext } from 'react'

import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  // Es una buena practica, para decir que estamos utilizando
  // un custom hook en un sitio que no es valido, es decir,
  // que no esta envuelta en un provider
  if (context === undefined) throw new Error('useCart must be used within a CartProvider')

  return context
}
