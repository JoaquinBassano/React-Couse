import { ClearCartIcon, CartIcon } from './Icons'
import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'

function CartItem ({ price, thumbnail, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>

      <footer>
        <small>
          Cantidad: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
                cart.map(product => (
                  <CartItem
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    {...product}
                  />
                ))
            }
        </ul>

        <button onClick={clearCart}><ClearCartIcon /></button>

      </aside>
    </>
  )
}
