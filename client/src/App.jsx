import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ApiDataFetcher from './Components/MedicalConditionSearch'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const fetchApi = async () => {
    const response = await axios.get('http://localhost:8080/api')
    // const data = await response.json()
    setData(response.data.teste)
    console.log(response.data.teste)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {
        data.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <br />
          </div>
        ))
      }
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Exemplo de Fetch de API</h1>
        <ApiDataFetcher />
      </div>
    </>
  )
}

export default App
