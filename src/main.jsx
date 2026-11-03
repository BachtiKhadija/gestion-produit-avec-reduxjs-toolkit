import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import Store from "./features/Store.jsx";
import 'bootstrap/dist/css/bootstrap.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
)
