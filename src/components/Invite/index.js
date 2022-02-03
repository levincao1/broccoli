/*
 * @Author: levin
 * @Date: 2022-02-02 15:43:58
 * @LastEditTime: 2022-02-03 22:04:00
 * @LastEditors: Please set LastEditors
 * @Description: Login component
 * @FilePath: /broccoli/src/components/Login/index.js
 */
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { is, fromJS } from 'immutable';
import { actions, getError } from "../../redux/modules/app";
import './Invite.scss';

const initialState = {
    error: '',
    inviting: false
}
class Invite extends Component {
    constructor(props) {
        super(props);
        this.title = 'Request an invite';
        this.userName = React.createRef();
        this.email = React.createRef();
        this.confirmEmail = React.createRef();
        this.state = {
            ...initialState
        };
    }

    clearInputState = () => {
        this.userName.value = '';
        this.email.value = '';
        this.confirmEmail.value = ''; 
    }

    /**
     * Close the dialog
     */
     handleClose = () => {
        this.clearInputState();
        this.props.onClose && this.props.onClose();
    }

    handleEffectAction = e => {
        e.stopPropagation();
    }

    handleInvite = async (e) => {
        e.preventDefault();
        const userName = this.userName.value;
        const email = this.email.value;
        const confirmEmail = this.confirmEmail.value;
        if (userName.length < 3) {
            this.userName.focus();
            return;
        }
        // validate email
        let emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!emailReg.test(email)) {
            this.email.focus();
            return;
        }
        // validate confirm email
        if (email !== confirmEmail) {
            this.confirmEmail.focus();
            return;
        }
        this.setState({
            inviting: true
        })
        try {
            const res = await this.props.sendInvite(userName, email);
            if(!res.error){
                this.setState({
                    inviting: false
                });
                this.props.onInviteSuccess();
                this.clearInputState();
                return;
            }
            this.setState({
                error: res.error.message
            });

        } catch(e){
            console.log(e)
        }
        
        
    }
    
    /**
     * Update component conditions
     * @param {*} nextProps 
     * @param {*} nextState 
     * @returns 
     */
     shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render() {
        return (
            <div className="invite-wrap" onClick={this.handleClose} style={this.props.show? {display:'block'}:{display:'none'}}>
                <div className="invite-dialog" onClick={this.handleEffectAction}>
                    <p className="invite-title">Request an invite</p>
                    <hr className="invite-title-line" />
                    <form className="invite-form" onSubmit={this.handleInvite}>
                        <input type="text" className="from-field" name="username" id="uname" placeholder='Full name' ref={input => { this.userName = input }}></input>
                        <input type="text" className="from-field" name="email" id="email" placeholder='Email' ref={input => { this.email = input }}></input>
                        <input type="text" className="from-field" name="email" id="email" placeholder='Confirm email' ref={input => { this.confirmEmail = input }}></input>
                        <button className="from-field btn-submit" disabled={this.state.inviting}>{this.state.inviting? 'Sending, please wait...' : 'Send'}</button>
                        <p className="msg-error">{this.state.error}</p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        error: getError(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Invite);