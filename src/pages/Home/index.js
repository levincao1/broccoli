/*
 * @Author: levin
 * @Date: 2022-02-02 12:08:06
 * @LastEditTime: 2022-02-03 22:01:59
 * @LastEditors: Please set LastEditors
 * @Description: Home page
 * @FilePath: /broccoli/src/pages/Home/index.js
 */
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Invite from './../../components/Invite';
import Toast from './../../components/Toast';
import { actions as authActions, getShowInvite, getLoggedUser, getError } from '../../redux/modules/app';
import './Home.scss';

const defaultState = {
    showInviteDialog: false,
    error: null
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultState
        }
    }
    handleShowInvite = e => {
        e.preventDefault();
        if (this.state.showInviteDialog) {
            return;
        }
        this.setState({
            showInviteDialog: true
        })
        // this.props.showInvite(true);
        // const showInvite = !this.state.showInvite;
        // Toast.show({
        //     title: 'All done!',
        //     content: 'You will be one of the first to experience Broccoli & Co. when we launch',
        //     onClose: () => {
        //         console.log('close the toast');
        //     }
        // });
    }

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
        }, 500)
        
    }

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
const mapStateToProps = (state, props) => {
    return {
        isInvite: getShowInvite(state),
        error: getError(state)
    };
}
const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(authActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);