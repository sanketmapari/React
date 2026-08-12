import React from 'react'

function Test() {
    const firstName = (name) => {
        return name
    }
    const a = firstName("Bob")

    function handleClick() {
        alert("hello Events")
    }
    const handleInput = (event) => {
        console.clear(0);
        console.log(event.target.value)
    }

  return (
    <div>
        <h1>hello : {firstName("Alice")}</h1>
        <h2>welcome : {firstName("rahul")}</h2>
        <h3>hello : {a}</h3>
        <button onClick={handleClick}>Click</button>
        <button onClick={() => alert("welcome to js")}>show</button>
        <input type = "text" onChange={handleInput} placeholder='Enter your name'/>
       
    </div>
  )
}

export default Test