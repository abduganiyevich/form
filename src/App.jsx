import'./App.css'
import Input from './components/input/Input'
function App() {
 

  return (
    <>
      <div className="container">
      <div className="title">
        <h1>Get an Estimate for Workspace</h1>
      </div>

      <div className="requirement">
        <h2>Post Your Requirements</h2>
        <p>Please fill the form below to receive a quote for workspace. Please add all the details required.</p>
      </div>
      <Input/>
      </div>
    </>
  )
}

export default App
