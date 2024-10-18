import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ExportFile from './Components/ExportFile.jsx';
import DownloadJsonButton from './Components/DownloadJsonButton.jsx';
import DownloadPdfButton from './Components/DownloadPdfButton.jsx';
import EnglishToPortuguese from './Components/EnglishToPortuguese.jsx';
import ThreeDModel from './Components/ThreeDModel.jsx';

const title = 'My JSON Export';
const description = 'This component exports JSON data.';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ExportFile title={ title } description={ description }/>
    <DownloadJsonButton />
    <DownloadPdfButton />
    <EnglishToPortuguese />
    <div style={{ width: '100vw', height: '100vh' }}>
      <ThreeDModel />
    </div>
  </StrictMode>,
)
