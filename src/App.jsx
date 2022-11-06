
import './App.css'

import {useState} from 'react'
function App() {
const [name, setName] = useState('')
const [url,setUrl] = useState('logo.jpg')
const handleChange = (event) => {
 setName(event.target.value); 

}
const getlogo = () => {
//usestate seturl to template literal
setUrl(`https://logo.clearbit.com/${name}`)
}
  return (
    <div className="App">
      <header>
      <h1>Logo Finder</h1>
<h4>Enter company's website and get their logo!</h4>
      </header>

<div id='btn'>
<input type="url" name="url" id="url" onChange={handleChange} placeholder='enter company website'></input>

<button onClick={getlogo}>enter</button>
</div>
    
<img draggable='false' src={url} alt="logo not found" id='a' />

    </div>
  );
}

export default App;
