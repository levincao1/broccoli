/*
 * @Author: levin
 * @Date: 2022-02-02 21:56:09
 * @LastEditTime: 2022-02-03 21:31:26
 * @LastEditors: Please set LastEditors
 * @Description: Request data
 * @FilePath: /broccoli/src/utils/request.js
 */
const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export const post = async function(url, data) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });
        return handleResponse(url, res);
    } catch (err) {
        return { error: { message: 'Request failed.' } };
    }
}

async function handleResponse(url, res) {
    if(res.status === 200) {
        return await res.json();
    } else if(res.status === 400){
        let result = await res.json();
        return {error: {message: result.errorMessage}}
    }
    return { error: {message: 'Request failed due to server error'}};
}