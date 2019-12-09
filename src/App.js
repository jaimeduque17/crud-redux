import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        CRUD with Redux
      </div>
    </Provider>
  );
}

export default App;
