/*
 * @Author: levin
 * @Date: 2022-02-02 11:23:42
 * @LastEditTime: 2022-02-05 11:20:12
 * @LastEditors: Please set LastEditors
 * @Description: App logic entry
 * @FilePath: /broccoli/src/containers/App/index.js
 */
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Component } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Home from './../Home';

import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="view-container">
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </HashRouter>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;