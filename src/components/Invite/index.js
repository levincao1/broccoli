/*
 * @Author: levin
 * @Date: 2022-02-02 15:43:58
 * @LastEditTime: 2022-02-02 22:07:06
 * @LastEditors: Please set LastEditors
 * @Description: Login component
 * @FilePath: /broccoli/src/components/Login/index.js
 */
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions, getError } from "../../redux/modules/app";
import './Invite.scss';
class Invite extends Component {
    constructor(props){
        super(props);
        this.userName = React.createRef();
        this.email = React.createRef();
        this.confirmEmail = React.createRef();
    }

    handleChange = e => {
        switch(e.target.name) {
            case 'userName':
                this.setState({
                    userName: e.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: e.target.value
                });
                break;
            case 'confirmEmail':
                this.setState({
                    confirmEmail: e.target.value
                });
                break;
            default:
                break;
        }
    }

    handleInvite = e => {
        e.preventDefault();
        const userName = this.userName.value;
        const email = this.email.value;
        const confirmEmail = this.confirmEmail.value;
        if (userName.length < 3){
            this.userName.focus();
            return;
        }
        // validate email
        let emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!emailReg.test(email)) {
            this.email.focus();
            return;
        }
        // validate confirm email
        if(email !== confirmEmail) {
            this.confirmEmail.focus();
            return;
        }
        this.props.Invite(userName, email);
    }

    render() {
        return (
            <div className="c-invite">
                <p className="c-invite-title">Request an invite</p>
                <hr className="line"/>
                <form className="c-invite-form" onSubmit={this.handleInvite}>
                    <input type="text" className="from-field" name="username" id="uname" placeholder='Full name' ref={input => { this.userName = input}}></input>
                    <input type="text" className="from-field" name="email" id="email" placeholder='Email' ref={input => { this.email = input}}></input>
                    <input type="text" className="from-field" name="email" id="email" placeholder='Confirm email' ref={ input => {this.confirmEmail = input}}></input>
                    <button className="from-field btn-submit">Send</button>
                    <p className="msg-error"></p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
      error: getLoggedUser(state)
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      ...bindActionCreators(actions, dispatch)
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Invite);