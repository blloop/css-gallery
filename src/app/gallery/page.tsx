'use client'

import { useState } from 'react'
import Painting from './painting'

export default function Page() {
  const [paintings, setPaintings] = useState([{
    title: 'New Painting', 
    text: 
      '<div style="width: 300px; ' + 
      'height: 300px; ' +
      'background-color: red"></div>', 
    id: 0
  }])
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
          key={p.id}
          title={p.title}
          text={paintings[p.id].text}
          setPaintNum={setPaintNum}
        />
      )}
      <button onClick={() => setPaintings(
        [...paintings, {title: 'New Painting', text: '', id: paintings.length}]
      )}> Add New </button>
    </div>
  )
}