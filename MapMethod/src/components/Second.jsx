import React from 'react';

function Second(){

    const user = [
        { name : "ram ",
          age : 25
        },
        { name : "shyam ",
            age : 30
          },
          { name : "raju ",
            
            age : 28
          },
    ]

    return (
        <>
        <h1>Second Components</h1>
        <p>array of objects, where each object represents a user with name and age properties.</p>
        <ul>
            {
                user.map( (item , index) => {
                    return (<li key={index}> {item.name} is {item.age}  year old </li>)
                })
            }
        </ul>


        </>
    )
}

export default Second;