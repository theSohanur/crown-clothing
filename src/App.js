import React from 'react';
import { BrowserRouter} from 'react-router-dom';
// import './App.scss';

import Maincomponent from './Maincomponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Maincomponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
