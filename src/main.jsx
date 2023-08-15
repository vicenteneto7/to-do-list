import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Routers } from 'react-router-dom'

import MyRouter from './routes/routes.jsx'
import GlobalStyles from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers>
      <MyRouter />
    </Routers>
    <GlobalStyles />
  </React.StrictMode>
)
