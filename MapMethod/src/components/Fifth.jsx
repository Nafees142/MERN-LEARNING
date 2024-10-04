import React from 'react'

const Fifth = () => {

    const students = ["ram", "shaym" , "rahul" , "sonu", "monu"]

  return (
    <div>
    <h1>map </h1>


    <ul>
    {
        students.map(item => (
            <li item={item}>{item}</li>
        ))
    }
    </ul>
    </div>
  )
}

export default Fifth
