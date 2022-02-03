/*
 * @Author: your name
 * @Date: 2022-02-03 10:51:39
 * @LastEditTime: 2022-02-03 19:37:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/components/Toast/index.js
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { is, fromJS } from 'immutable';
import './Toast.scss';

// Default state
const defaultState = {
    show: false,
    title: '',
    content: '',
    confirmTxt: 'ok',
    onClose: () => { }
}

class ToastDialog extends Component {
    constructor(props) {
        super(props);
        this.state = { ...defaultState };
    }

    /**
     * Confirm event
     */
    handleConfirm = () => {
        this.setState({
            show: false
        });
        this.state.onClose();
    }

    /**
     * Show the toast dialog
     * @param {*} options 
     */
    show = options => {
        options = options || {};
        options.show = true;
        this.setState({
            ...defaultState,
            ...options
        });
    }

    /**
     * Close the dialog
     */
    handleClose = () => {
        this.state.onClose();
        this.setState({
            ...defaultState
        })
    }

    /**
     * Effective click
     * @param {*} e 
     */
    handleEffectAction = e => {
        e.stopPropagation();
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
            <div className="toast-wrap" onClick={this.handleClose} style={this.state.show? {display:'block'}:{display:'none'}}>
                <div className="toast-dialog" onClick={this.handleEffectAction}>
                    <p className="toast-title">{this.state.title}</p>
                    <hr className="toast-title-line" />
                    <div className="toast-content">
                        {this.state.content}
                    </div>
                    <button className="btn-confirm" onClick={this.handleConfirm}>{this.state.confirmTxt}</button>
                </div>
            </div>
        );
    }
}

const container = document.createElement('div');
const props = {};
document.body.appendChild(container);

const Toast = ReactDOM.render(React.createElement(
    ToastDialog,
    props
), container);

export default Toast;