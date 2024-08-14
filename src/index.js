import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'
import Protected from './views/pages/projectedPage/Protected'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Protected>
      <App />
    </Protected>
  </Provider>,
)
