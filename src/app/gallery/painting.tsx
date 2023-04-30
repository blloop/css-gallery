'use client'

const Painting = (props: any) => {

  let copyClipboard = () => {
    navigator.clipboard.writeText(props.text);
  }
  return (    
    <div className='painting' key={props.id}>
      {/* <p> Name: {props.title} </p> */}
      <p> Add your code below! </p>
      <button className='copy-button' 
        onClick={event => copyClipboard()}> 
        Copy to clipboard 
      </button>
      <textarea className='paint'
        onChange={(event) => {
          props.setPaintNum(props.id, event.target.value)
        }}
        value={props.text}/>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  )
}

export default Painting