// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
      setAlert({
        msg: msg,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text Utils - Light Mode';
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text Utils - Dark Mode';
    }
  }
  return (
    <>
      <Router basename='/TextUtils-React'>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route exact path="/TextUtils-React" element={<TextForm showAlert={showAlert} heading="Try TextUtils" mode={mode}/>}>
              </Route>
              <Route exact path="/about" element={<About mode={mode}/>}>
              </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
