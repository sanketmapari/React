import React from 'react'

function Index() {
  const test = {
    backgroundColor:"red",
    color:"white",
    textAlign:"center",
    padding:"10px"
  }
  return (
    <div>
        <h1 style={{backgroundColor:"black", color:"white",textAlign:"center",padding:"10px"}}> Inline Css</h1>
        <h1 style={test}>  Internal css </h1>
    </div>
  )
}

export default Index