import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ExportJSON from './ExportJSON.jsx'

const title = 'My JSON Export';
const description = 'This component exports JSON data.';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ExportJSON title={title} description={description}/>
  </StrictMode>,
)
