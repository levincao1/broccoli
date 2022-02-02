/*
 * @Author: levin
 * @Date: 2022-02-02 11:15:40
 * @LastEditTime: 2022-02-02 13:31:34
 * @LastEditors: Please set LastEditors
 * @Description: Footer component
 * @FilePath: /broccoli/src/components/Footer/index.js
 */
import { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
               <p>Made with &#9829; in Melbourne.</p>
               <p>&copy; 2016 Broccolin & Co. All rights reserved.</p> 
            </footer>
        );
    }
}
export default Footer;