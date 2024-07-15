import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store, { StoreProvider } from 'container/StoreContext'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreProvider>
        <App basePath='/clients/' />
      </StoreProvider>
    </Provider>
  </React.StrictMode>
)
