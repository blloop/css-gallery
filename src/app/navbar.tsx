'use client'

import './navbar.css'

export default function NavBar(props: any) {
  return (
    <div className='navbar'> 
      <a href="/"
        className='title'> CSS Gallery </a>
      <hr/>
      <div className='links'>
        <a href={props.page === 1 ? '' : '/gallery'}
          className={props.page === 1 ? 'selected' : ''}> 
          Gallery 
        </a>
        <a href={props.page === 2 ? '' : '/guide'}
          className={props.page === 2 ? 'selected' : ''}> 
          Guide
        </a>
      </div>
    </div>
  )
};