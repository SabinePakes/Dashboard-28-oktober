import Header from './components/Header.js';
import Students from './components/Students.js';
import Contact from './components/Contact.js';
import Main from './components/Main.js';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div>
      <Header />
      <Router>
        <ul className="navbar">
          <li onClick={refreshPage}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Students">Student Info</Link>
          </li>
        </ul>
        <Routes>
          <Route 
          element={<Students />}
          path="/Student"/>
          <Route
          element={<Contact />}
          path="/Contact"/>
          <Route 
          element={<Main />}
          path="/"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
