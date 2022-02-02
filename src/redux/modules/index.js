/*
 * @Author: levin
 * @Date: 2022-02-02 11:36:01
 * @LastEditTime: 2022-02-02 12:36:00
 * @LastEditors: Please set LastEditors
 * @Description: Root reducer entry
 * @FilePath: /broccoli/src/redux/modules/index.js
 */

import { combineReducers } from 'redux-immutable';
import app from './app';
const rootReducer = combineReducers({
    app
});

export default rootReducer;