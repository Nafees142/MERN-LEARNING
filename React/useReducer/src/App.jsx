
import {useReducer} from 'react'
function App() {
  
  const counterReducer = (currentState , action) => {
    let newState = currentState;

    if(action.type === 'INCREMENT'){
      newState += 1;
    }
    else if(action.type === 'DECREMENT'){
      newState -= 1;
    }
   return newState
  }

  const incrementHandler = () => {
    
    counterValDispatch ({
      type : "INCREMENT"
    });
    console.log('increment clikced')
  }

  const decrementHandler =() =>{
    counterValDispatch ({
      type : "DECREMENT"
    })
    console.log('decrement clicked')
  }
 
  const [counterVal, counterValDispatch] = useReducer(counterReducer , 0)
  return (
    <>
      <h1>Count : {counterVal}</h1>
      <button onClick ={incrementHandler}>Increment</button>
      <button onClick ={decrementHandler}>Decrement</button>
    </>
  )
}

export default App
