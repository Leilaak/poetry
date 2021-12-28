import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from './Components/Home/Home';
import FaalHafez from './Components/FaalHafez/FaalHafez';
import Random from './Components/Random/Random';
import Poets from './Components/Poets/Poets';

function App() {
  return (
      <>
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/faal" exact element={<FaalHafez />} />
                <Route path="/random" exact element={<Random />} />
                <Route path="/random/poet" exact element={<Poets />} />
            </Routes>
        </Router>
      </>
  );
}

export default App;
