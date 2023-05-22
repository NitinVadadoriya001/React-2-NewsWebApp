import React, { Component } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News'
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;

  state ={
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          
        />
        <Routes>
          <Route excat path="/" element={<News setProgress={this.setProgress} key="home" pageSize={this.pageSize} country={"in"} category={'business'}></News>} />
          <Route excat path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={"in"} category={'business'}></News>} />
          <Route excat path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"}></News>} />
          <Route excat path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={"in"} category={"general"}></News>} />
          <Route excat path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={"in"} category={"health"}></News>} />
          <Route excat path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={"in"} category={"science"}></News>} />
          <Route excat path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={"in"} category={"sports"}></News>} />
          <Route excat path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={"in"} category={"technology"}></News>} />



        </Routes>
      </div>
    )
  }
}


