'use client'

import { useState } from 'react'
import NavBar from '../navbar'
import Painting from './painting'
import './gallery.css';

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
  
  return ( <>
    <NavBar page={1}/>
    <div className='gallery'>
      {paintings.map((p) =>
        <Painting
          key={p.id}
          id={p.id}
          title={p.title}
          text={paintings[p.id].text}
          setPaintNum={setPaintNum}
        />
      )}
      <div className='add-paint' onClick={() => setPaintings(
        [...paintings, {title: 'New Painting', text: '', id: paintings.length}]
      )}>
        <div className='cross'>
          <div className='add-a'/>
          <div className='add-b'/>
        </div>
      </div>
    </div>
  </> )
}