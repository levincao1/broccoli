/*
 * @Author: your name
 * @Date: 2022-02-02 21:56:09
 * @LastEditTime: 2022-02-02 22:07:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/utils/request.js
 */
const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export const post = async function(url, data) {
    return fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then(res => {
        return handleResponse(url, res);
    }).catch(err => {
        return { error: { message: 'Request failed.'}};
    })
}

function handleResponse(url, res) {
    if(res.status < 500) {
        return res.json();
    }
    return { error: {message: 'Request failed due to server error'}};
}