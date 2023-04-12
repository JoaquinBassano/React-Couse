'use client'

import { useState } from 'react'

export default function LikeButton () {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked
        ? 'NO me gusta !'
        : 'ME GUSTA !!'}
    </button>
  )
}
