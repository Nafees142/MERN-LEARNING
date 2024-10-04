import React from "react";


function Third({task}){

    return(
        <>
        <h1>Third Component</h1>
        <ul>
        {task.map(item => <li key={item}>{item}</li>)}
        </ul>
        </>
    )

}

export default Third;