import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  // const [factError, setFactError] = useState()
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  return (
    <div className='App'>
      <h2>Fetching & Testing E2E con app de Gatitos</h2>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_ENDPOINT_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />}
    </div>
  )
}

export default App
