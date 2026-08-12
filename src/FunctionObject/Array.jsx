import React from 'react'

function Array() {
    const fruits = ["apple" , "mango" , "orange"];
  return (
    <div>
        <h1>Array Elements</h1>
        <ul>
            {
                fruits.map((fruits, index)=>(
                    <li>{fruits}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Array