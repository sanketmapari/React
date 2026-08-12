import React from 'react'

function Condition() {
    const isLogin = true;
    let msg
    if(isLogin){
        msg = <h1>welcome user</h1>
    }
    else{
        msg = <h1>please login</h1>
    }
    return (
        <>
        <h1>{msg}</h1>
        </>
    )
  
}

export default Condition