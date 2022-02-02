/*
 * @Author: your name
 * @Date: 2022-02-02 22:08:46
 * @LastEditTime: 2022-02-02 22:10:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/api/invite.js
 */
import { post } from '../utils/request'
const url = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';
export default {
    invite: data => post(url, data)
}