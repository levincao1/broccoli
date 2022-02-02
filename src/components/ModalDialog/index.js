/*
 * @Author: your name
 * @Date: 2022-02-02 16:05:27
 * @LastEditTime: 2022-02-02 16:29:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/components/Modal/index.js
 */
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Modal.scss';
class ModalConatiner extends Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
    }

    componentDidMount(){
        document.body.appendChild(this.container);
    }

    componentWillUnmount() {
        document.body.removeChild(this.container);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal-dialog">
                <div className="message">{this.props.children}</div>
            </div>,
            this.container
        );
    }
}
export default ModalConatiner;