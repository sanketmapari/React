import React from 'react'

function Object() {
  const user = {
    name : "john",
    subject : "react",
    age : 22,
    isStudent : true
  }
  return (
    <div>
        <h2> name is : {user.name}</h2>
        <h2> subject : {user.subject}</h2>
        <h2> age : {user.age}</h2>
        <h2> isStudent : {user.isStudent.toString()}</h2>
    </div>
  )
}

export default Object