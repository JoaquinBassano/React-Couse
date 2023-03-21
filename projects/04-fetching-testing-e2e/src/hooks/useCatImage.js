import { useEffect, useState } from 'react'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'

// Custom Hooks
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`${CAT_ENDPOINT_IMAGE_URL}/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(data => {
        setImageUrl(data.url)
      })
  }, [fact])

  return { imageUrl }
}
