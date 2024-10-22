import {useState} from 'react'
import List from "./components/List";

function App() {

  const [arr, setArr] = useState(["shakir", "prajwal", "adnan", "noor", "fidyan"])
  

  const onChangeHandler = (e) =>{
    if(e.key === "Enter"){
      console.log(e.target.value);
     const newArr = [...arr, e.target.value]
     e.target.value = "";
      setArr(newArr);
      console.log(newArr);

    }
  }
  

  
  return (
    <>
      <List list={arr} />

      <input
        type="text"
        placeholder="new student name"
        onKeyDown={onChangeHandler}
      />
    </>
  );
}

export default App;
