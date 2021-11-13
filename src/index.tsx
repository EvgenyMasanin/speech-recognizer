import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { setupStore } from 'store'
import { ToastProvider } from 'react-toast-notifications'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'

const store = setupStore()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
