import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Signup from './Components/Login/Signup';
//import Login from './Components/Login/Login';
import Navigate from './Components/Navigate';
import WOFF_DB from './Components/WOFF_DB';
//import { AuthProvider } from './Components/Login/AuthContext';








function App() {
  return (
    <div className="App">

      <Navigate />
      <WOFF_DB />
    </div>
  );
}

export default App;
