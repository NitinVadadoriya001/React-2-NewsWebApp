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
        <Route excat path="/world" element={<News setProgress={setProgress} key="world" pageSize={pageSize} country={"in"} category={"world"}></News>} />
        <Route excat path="/automobile" element={<News setProgress={setProgress} key="automobile" pageSize={pageSize} country={"in"} category={"automobile"}></News>} />
        <Route excat path="/politics" element={<News setProgress={setProgress} key="politics" pageSize={pageSize} country={"in"} category={"politics"}></News>} />
        <Route excat path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={"in"} category={"sports"}></News>} />
        <Route excat path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={"in"} category={"technology"}></News>} />
        <Route excat path="/startup" element={<News setProgress={setProgress} key="startup" pageSize={pageSize} country={"in"} category={"startup"}></News>} />

      </Routes>
    </div>
  )

}

export default App;
