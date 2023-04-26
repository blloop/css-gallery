'use client'

const Painting = (props: any) => {
  return (    
    <div className='painting' key={props.id}>
      <p> Name: {props.title} </p>
      <input 
        onChange={(event) => {
          props.setPaintNum(props.id, event.target.value)
        }}
        value={props.text}/>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  )
}

export default Painting