import Tasks from './components/Tasks'
import Input from './components/Input'
import './styles/App.css'

const App = () => {

  return (
    <div className="app">
      <Input />
      <Tasks tasks={[]} />
    </div>
  )
}

export default App
