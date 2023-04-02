import { lazy, Suspense } from 'react'

import { HomePage } from './pages/Home'
// import { AboutPage } from './pages/About'
import Page404 from './pages/404'

import { Router } from './Router'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  // {
  //   path: '/',
  //   Component: HomePage
  // },
  // {
  //   path: '/about',
  //   Component: AboutPage
  // },
  {
    path: '/search/:query',
    Component: ({ routeParams }) => <h1>El search que se busca es: {routeParams.query}</h1>
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
