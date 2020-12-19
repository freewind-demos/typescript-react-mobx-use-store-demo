import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'
import { StoreContext } from './StoreContext';
import { Store } from './Store';

ReactDOM.render(
  <StoreContext.Provider value={new Store()}>
    <Hello/>
  </StoreContext.Provider>,
  document.body
)
