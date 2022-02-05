/*
 * @Author: levin
 * @Date: 2022-02-02 12:08:06
 * @LastEditTime: 2022-02-05 11:44:47
 * @LastEditors: Please set LastEditors
 * @Description: Home page
 * @FilePath: /broccoli/src/pages/Home/index.js
 */
import { Component } from 'react';
import Invite from './../../components/Invite';
import Toast from './../../components/Toast';
import './Home.scss';

const initialState = {
    // The status of invite dialog display
    showInviteDialog: false
};
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }
    /**
     * Show the invite dialog event
     * @param {*} e 
     * @returns 
     */
    handleShowInvite = e => {
        e.preventDefault();
        if (this.state.showInviteDialog) {
            return;
        }
        this.setState({
            showInviteDialog: true
        });
    }

    /**
     * Send invite request successful
     */
    handleInviteSuccess = () => {
        this.setState({
            showInviteDialog: false
        });
        setTimeout(() => {
            Toast.show({
                title: 'All done!',
                content: 'You will be one of the first to experience Broccoli & Co. when we launch',
                onClose: () => {
                    console.log('close the toast');
                }
            });
        }, 500);  
    }

    /**
     * Close the invite dialog event
     */
    handleCloseInvite = () => {
        this.setState({
            showInviteDialog: false
        })
    }

    render() {
        return (
            <div className="page-home">
                <h1 className="txt-title"> A better way <br /> to enjoy every day.</h1>
                <p className="txt-desc"> Be the first to know when we launch.</p>
                <button className="btn-invite" onClick={this.handleShowInvite}>Request an invite</button>
                <Invite show={this.state.showInviteDialog} onInviteSuccess={this.handleInviteSuccess} onClose={this.handleCloseInvite}/>
            </div>
        );
    }
}
export default Home;