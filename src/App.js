import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API_KEY;
  
  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  pageSize = 9;

  render() {
    return (
      <Router>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general2" pageSize={this.pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          <Route path="/about" element={<News setProgress={this.setProgress} apikey={this.apikey} key="about" pageSize={this.pageSize} country="us" category="general" />} />
        </Routes>
      </Router>
    );
  }
}