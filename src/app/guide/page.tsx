'use client'

import './page.css'

import NavBar from '../navbar'

export default function Home() {
  return ( <>
    <NavBar page={2}/>
      <div className='main-text'>
        <p className='subtitle'> How to use this app </p>
        <ul>
          <li> 
            Modify the contents of a "painting" by changing the
            corresponding text
          </li>
          <li>
            Add a new "painting" by pressing the "+" button
          </li>
        </ul>
      </div>
  </> )
}
