import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Move  from './components/Move'
import Winner from './components/Winner'
import Buy from './components/Buy'

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        卷动盘
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/move">Move</Link>
          </li>
          <li>
            <Link to="/winner">Winner</Link>
          </li>
          <li>
            <Link to="/buy">Buy</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path=":move" element={<Move />}>
          <Move />
        </Route>
        <Route path=":winner" element={<Winner />}>
          <Winner />
        </Route>
        <Route path=":buy" element={<Buy />}>
          <Buy />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
