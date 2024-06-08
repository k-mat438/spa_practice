import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './components/Restaurants';
import Foods from "./components/Foods";
import Orders from './components/Orders';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/restaurants' element={<Restaurants />} />
          {/* <Route path='/foods' element={<Foods />}/> */}
          <Route path='/orders' element={<Orders />} />
          <Route path='/restaurants/:restaurantsId/foods' element={<Foods />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
