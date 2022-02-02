/*
 * @Author: your name
 * @Date: 2022-02-02 09:49:32
 * @LastEditTime: 2022-02-02 13:09:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./redux/configureStore";
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
