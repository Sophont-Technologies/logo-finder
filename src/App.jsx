import './App.css'
import axios from 'axios'
import {useState} from 'react'
function App() {
const [name, setName] = useState('')
const [url,setUrl] = useState('')
const handleChange = (event) => {
 setName(event.target.value); 

}
const getlogo = () => {
//usestate seturl to template literal
setUrl(`https://logo.clearbit.com/${name}`)
}
  return (
    <div className="App">
     <input type="url" name="url" id="url" onChange={handleChange}></input>

<button onClick={getlogo}>enter</button>
<img src={url} alt="" />
    </div>
  )
}

export default App
