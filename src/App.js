import React, { useState } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News'
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;

  const [progress, setProgress] = useState(0);



  return (
    <div>
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={progress}

      />
      <Routes>
        <Route excat path="/" element={<News setProgress={setProgress} key="home" pageSize={pageSize} country={"in"} category={'business'}></News>} />
        <Route excat path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country={"in"} category={'business'}></News>} />
        <Route excat path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"}></News>} />
        <Route excat path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={"in"} category={"general"}></News>} />
        <Route excat path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country={"in"} category={"health"}></News>} />
        <Route excat path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country={"in"} category={"science"}></News>} />
        <Route excat path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={"in"} category={"sports"}></News>} />
        <Route excat path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={"in"} category={"technology"}></News>} />



      </Routes>
    </div>
  )

}

export default App;
