import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer () {
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {JSON.stringify(cart.map(item => ({
        title: item.title,
        cantidad: item.quantity
      })), null, 2)}
      {
        //   <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
        //   <h5>Shopping Cart con useContext & useReducer</h5>
      }
    </footer>
  )
}
