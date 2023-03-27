'use client'

import { useState } from 'react'

export default function Page() {
  const [paintings, setPaintings] = useState([{name: 'New Painting', text: ''}])
  
  return (
    <div>
      <p> Gallery of CSS Components </p>
      <a href="/"> Back to home </a>
      {paintings.map((p) => 
        <div className='painting'>
          <p> Name: </p>
          <input defaultValue={p.name}/>
          <p> Text: </p>
          <input defaultValue={p.text}/>
        </div>
      )}
      <button onClick={() => setPaintings(
        [...paintings, {name: 'New Painting', text: ''}]
      )}> Add New </button>
    </div>
  )
}