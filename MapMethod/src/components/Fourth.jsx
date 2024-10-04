import React from "react";

function Fourth () {
    const products = [
        {id:1,item:"laptop", price: 1999},
        {id:2,item:"desktop", price: 999},
        {id:3,item:"mouse", price: 99},
        {id:4,item:"apple", price: 2999},
        {id:5,item:"mackbook", price: 299},
    ]

    return (
        <>
        <h1>Fourth Component</h1>
        {
         products.filter(product => product.price > 199).map((product, index) => (
            <li key={index}> {product.item} - {product.price}</li>
         ))
        }
        </>
    )
}

export default Fourth;