import List from "./List"
import Container from "./Container"


function App() {
  const arr = ["shakir" , "prajwal" , "adnan" , "noor" , "fidyan"]
    // let arr ;

  return (
    <>

      <Container>
      <h1>Learn MERN Stack</h1>
     
      </Container>
      <Container>
      <List list={arr}/>
      </Container>
      
    </>
  )
}

export default App
