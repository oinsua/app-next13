'use client'
import React, { useState } from 'react'

export default function Button() {
    const [like, setLike] = useState(false);

  return (
    <button onClick={() => setLike(like => !like)} style={{margin: "1rem"}}>
        {
            like ? '❤️' : '🤍'
        }
    </button>
  )
}
