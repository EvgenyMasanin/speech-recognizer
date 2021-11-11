import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { setupStore } from 'store'
import { ToastProvider } from 'react-toast-notifications'
import App from './app/App'

const store = setupStore()

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root')
)
