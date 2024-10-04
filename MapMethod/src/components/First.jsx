import React from 'react'

function First(){

    const StudentName = ["shams", "fidyan" , "noor" , "prajwal", "shakir"]
    return (
    <ul>
        {
            StudentName.map(item => <li key={item}>{item}</li>)
        }
    </ul>
    )
}


export default First;
