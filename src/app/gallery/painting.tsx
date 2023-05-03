'use client'

import { useState } from "react";

const Painting = (props: any) => {

  const [clicked, setClicked] = useState(false);

  let copyClipboard = () => {
    navigator.clipboard.writeText(props.text);
  }
  return (    
    <div className='painting' key={props.id}>
      {/* <p> Name: {props.title} </p> */}
      <p> Add your code below! </p>
      <div className='copy-row'>
        <p className='check-off'>&#x2713;</p>
        <button className='copy-button' 
          onClick={event => {
            copyClipboard();
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
            }, 2000)
          }}> 
          Copy to clipboard 
        </button>
        <p className={clicked ? 'check-on' : 'check-off'}>&#x2713;</p>
      </div>
      <textarea className='paint'
        onChange={(event) => {
          props.setPaintNum(props.id, event.target.value);
        }}
        value={props.text}/>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  )
}

export default Painting