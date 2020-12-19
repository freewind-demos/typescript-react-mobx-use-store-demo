import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { StoreContext } from './StoreContext';

function Hello() {
  const store = useContext(StoreContext);
  return <div>
    <button onClick={() => store.increase()}>+1</button>
    <div>Count: {store.count}</div>
    <div>Double: {store.double}</div>
  </div>
}

export default observer(Hello)
