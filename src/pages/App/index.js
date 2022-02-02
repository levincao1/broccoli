/*
 * @Author: your name
 * @Date: 2022-02-02 11:23:42
 * @LastEditTime: 2022-02-02 17:31:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/containers/App/index.js
 */
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Component } from 'react';
import { bindActionCreators } from "redux";
import ModalDialog from './../../components/ModalDialog';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Invite from './../../components/Invite';
import Home from './../Home';
import { connect } from "react-redux";
import { actions as appActions, getShowInvite, getError, getRequestQuantity } from "../../redux/modules/app";
import './App.scss';
class App extends Component {
  render() {
    const { isInvite } = this.props;
    const inviteDialog = isInvite && (
      <ModalDialog>
        <Invite/>
      </ModalDialog>
    );
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
        {inviteDialog}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isInvite: getShowInvite(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);