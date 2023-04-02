import { useState } from 'react'

import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Products } from './components/Products'
import { Footer } from './components/Footer'

import { useFilters } from './hooks/useFilters'
import { CartProviders } from './context/cart'

import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProviders>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProviders>
  )
}

export default App
