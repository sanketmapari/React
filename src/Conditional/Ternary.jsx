import React from 'react'

function Ternary() {
    const isLogin = false;
  return (
    <>
    <h1>{isLogin?<h1>Welcome User</h1>:<h1>please Login </h1>}</h1>
    </> 
  )
}

export default Ternary