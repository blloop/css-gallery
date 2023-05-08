'use client'

import './page.css'

import NavBar from './navbar'

export default function Home() {
  return ( <>
    <NavBar page={0}/>
      <div className='main-text'>
        <p className='subtitle'> This is a simple CSS gallery </p>
        <p> Here, you can view various examples of inline CSS </p>
      </div>
  </> )
}
