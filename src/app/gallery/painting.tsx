'use client'

const Painting = (props: any) => {
  return (    
    <div className='painting' key={props.id}>
      {/* <p> Name: {props.title} </p> */}
      <p> Add your code below! </p>
      <textarea className='paint'
        onChange={(event) => {
          props.setPaintNum(props.id, event.target.value)
        }}
        value={props.text}/>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
      {/* TODO: Add copy to clipboard button */}
    </div>
  )
}

export default Painting