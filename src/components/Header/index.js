/*
 * @Author: levin
 * @Date: 2022-02-02 11:10:45
 * @LastEditTime: 2022-02-02 14:45:47
 * @LastEditors: Please set LastEditors
 * @Description: Header component
 * @FilePath: /broccoli/src/components/Header/index.js
 */
import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
    render () {
        return (
            <header className="app-header">
                <p className="txt-title">BROCCOLI & CO.</p>
            </header>
        );
        
    }
}
export default Header;