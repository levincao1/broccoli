/*
 * @Author: your name
 * @Date: 2022-02-02 09:49:32
 * @LastEditTime: 2022-02-05 19:01:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/setupTests.js
 */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })
