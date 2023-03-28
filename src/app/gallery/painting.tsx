'use client'

const Painting = (props: any) => {
  return (    
    <div className='painting'>
    <p> ID: {props.id} </p>
    <p> Name: {props.name} </p>
    <p> Text: </p>
    <input 
      onChange={(event) => {
        props.setPaintNum(props.id, event.target.value)
      }}
      value={props.text}/>
  </div>
  )
}

export default Painting