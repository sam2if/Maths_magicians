/*eslint-disable*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calc from './pages/Calc';
import Quotes from './components/display';
import NavigationBar from './components/Navigation/navigationbar';

const App = () => (
  <>
    <NavigationBar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calc />} />
        <Route path="/FetchQuotes" element={<Quotes />} />
      </Routes>
    </div>
  </>
);

export default App;
