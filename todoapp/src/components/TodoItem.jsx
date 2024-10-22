import React from 'react'
import Button from './Button'

const TodoItem = ({id, todoText, todoDate, deleteItems}) => {

  

  return (
    <div className="container">
    <div className="row mb-1 text-start">
      <div className="col-5">
        {todoText}
      </div>
      <div className="col-3">
       {todoDate}
      </div>
      <div className="col-2">
        <Button btnType='danger' btnText ='Delete' handler= { ()=> deleteItems(id)} />
        
      </div>
    </div>
  </div>
  )
}

export default TodoItem
