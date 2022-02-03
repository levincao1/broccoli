/*
 * @Author: levin
 * @Date: 2022-02-02 16:05:27
 * @LastEditTime: 2022-02-03 15:45:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/components/Modal/index.js
 */
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Modal.scss';
let defaultState = {
    showStatus: false,
    title: '',
    onOk: () => {},
    onCancel: () => {}
}
class Modal extends Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        this.state = { ...defaultState };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const showStatus = nextProps.showStatus
        if(showStatus !== prevState.showStatus) {
            return {
                showStatus
            }
        }
        return null;
    }

    componentDidMount(){
        document.body.appendChild(this.container);
    }

    componentWillUnmount() {
        document.body.removeChild(this.container);
    }
    /**
     * Cancel click event 
     */
    handleClose = () => {
        this.props.onCancel && this.props.onCancel();
        this.setState({
            ...defaultState
        });
    }

    /**
     * OK click event
     */
    handleOkClick = () => {
        this.setState({
            ...defaultState
        });
    }

    /**
     * confirm effect click
     * @param {*} e 
     */
    handleEffectClick = (e) => {
        e.stopPropagation();
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal-wrap" onClick={this.handleClose} style={this.state.showStatus ? {display:'block'} : {display: 'none'}}>
                <div className="modal-dialog" onClick={this.handleEffectClick}>
                    {this.props.children}
                </div>
            </div>
            ,
            this.container
        );
    }
}

export default Modal;