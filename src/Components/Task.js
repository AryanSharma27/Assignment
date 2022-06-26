import React from 'react'
import pic from "./images/pic1.jpeg"
import pic3 from "./images/pic2.jpeg"
function Task(props) {
  return (
    <>
    <div>
        <img style={{height:'100px'}} src={pic}/>
        <p>The Price of this piano is ${props.cost}</p>
        <button>Add to cart</button>
        </div>
        <br></br>
        <div>
            <img style={{height:'100px'}} src={pic3}/>
            <p>The Price of this piano is ${props.cost1}</p>
        <button>Add to cart</button>
            
        </div>
    </>
  )
}

export default Task