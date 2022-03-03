import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Move from './components/Move'
import Winner from './components/Winner'
import Buy from './components/Buy'

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        卷动盘
      </header>
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
      <Router>
        <Routes>
          <Route path=":move" element={<Move />}></Route>
          <Route path=":winner" element={<Winner />}></Route>
          <Route path=":buy" element={<Buy />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
