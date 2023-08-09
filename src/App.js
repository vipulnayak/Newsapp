import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import {
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
 
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
         <Route exact path="/" setProgress={setProgress} element={<News key="about " pageSize={pageSize}  country="in" category="sports" />} />
          <Route exact path="/business" setProgress={setProgress} element={<News key=" business" pageSize={pageSize}  country="in" category="business" />} />
          <Route exact path="/entertainment" setProgress={setProgress}  element={<News key="entertainment" pageSize={pageSize}  country="in" category="entertainment" />} />
          <Route exact path="/general" setProgress={setProgress} element={<News key=" general" pageSize={pageSize}  country="in" category="general" />} />
          <Route exact path="/health " setProgress={setProgress} element={<News key="health " pageSize={pageSize}  country="in" category="health" />} />
          <Route exact path="/science" setProgress={setProgress} element={<News key=" sciene" pageSize={pageSize}  country="in" category="science" />} />
          <Route exact path="/sports" setProgress={setProgress} element={<News key="sports " pageSize={pageSize}  country="in" category="sports" />} />
          <Route exact path="/technology" setProgress={setProgress} element={<News key="technology " pageSize={pageSize}  country="in" category="technology" />} />
        </Routes>
      </div>
    )
  }

export default App
