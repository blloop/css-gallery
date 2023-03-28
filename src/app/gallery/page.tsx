'use client'

import { useState } from 'react'
import Painting from './painting'

export default function Page() {
  const [paintings, setPaintings] = useState([{name: 'New Painting', text: '', id: 0}])
  const setPaintNum = (num: number, val: string) => {
    if (num >= paintings.length) return
    let newPaintings = [...paintings]
    newPaintings[num].text = val
    setPaintings(newPaintings)
  }
  
  return (
    <div>
      <p> Gallery of CSS Components </p>
      <a href="/"> Back to home </a>
      {paintings.map((p) =>
        <Painting
          id={p.id}
          name={p.name}
          text={paintings[p.id].text}
          setPaintNum={setPaintNum}
        />
      )}
      <button onClick={() => setPaintings(
        [...paintings, {name: 'New Painting', text: '', id: paintings.length}]
      )}> Add New </button>
    </div>
  )
}