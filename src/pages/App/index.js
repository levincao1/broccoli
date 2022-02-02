/*
 * @Author: your name
 * @Date: 2022-02-02 11:23:42
 * @LastEditTime: 2022-02-02 13:59:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/containers/App/index.js
 */
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../Home';
import './App.scss';
function App() {
    return (
      <div className="app">
          <Header/>
          <div className="view-container">
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                </Routes>
            </HashRouter>
          </div>
          <Footer/>
      </div>
    );
  }
  
  export default App;