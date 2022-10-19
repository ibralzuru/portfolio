
import React, { Component } from 'react';
import ResponsiveAppBar from './Components/Header/header';
import Home from "./Containers/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<Home />} />
           
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;