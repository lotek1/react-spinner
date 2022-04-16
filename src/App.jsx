import { ThreeDots, Triangle } from  'react-loader-spinner'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ThreeDots height='100' width='100' color='gray'/>
        <Triangle height='100' width='100' color='gray'/>
        <ThreeDots height='100' width='100' color='gray'/>
        
      </header>
    </div>
  )
}

export default App
