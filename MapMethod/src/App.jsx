import Fifth from './components/Fifth'
import First from './components/First'
import Fourth from './components/Fourth'
import Second from './components/Second'
import Third from './components/Third'

function App() {
  const tasks = ["task 1", "task 2","task 3","task 4","task 5",]

  return (
 <>
    <h1>hlleoooo</h1>
      <First />
      <Second />
      <Third task={tasks}/>
      <Fourth />
      <Fifth />
      </>
  )
}

export default App
