import React from 'react'
import style from './StyleA.module.css'
import img from '../assets/Image1.png' //yeh import karna padta hai image ko use karne ke liye.

function Index2() {
  return (
    <div>
        <h1 className={style.demo}> welcome to index2</h1>
        <img src={img} alt="image" width="500px" />  
    </div>
  )
}

export default Index2

//example.module.css file banana padti hai.
// or direct kiya to bhir vo import nhi kiya to bhi apply ho jata hai.
// but agar import kiya to vo apply nhi hota hai.
