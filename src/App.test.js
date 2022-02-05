/*
 * @Author: your name
 * @Date: 2022-02-02 09:49:32
 * @LastEditTime: 2022-02-05 21:44:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /broccoli/src/App.test.js
 */

import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import {Invite} from './components/Invite';
import { shallow , mount} from 'enzyme';
import reqApi from './api/invite';
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();
/**
 *  Test invite dialog display
 */
describe('<Home/>', () => {
  it('popup invite diaolog', () => {
    const home = mount(<Provider store={store}><Home/></Provider>);
    const btnInvite = home.find('.btn-invite');
    btnInvite.simulate('click');
    expect(home.find(Home).instance().state['showInviteDialog']).toBe(true);
  });
});

/**
 * Test invite action validation by front end
 */
describe('<Invite/>', () => {
  it('Validate the parameters when send invite action', () =>{
    const wrapper = mount(<Provider store={store}><Invite show={true}/></Provider>);
    expect(wrapper.find(Invite).length).toBe(1);
    const inviteDialog = wrapper.find(Invite).instance();
    const name = inviteDialog.userName;
    name.value = 'ads';
    expect(name.value.length >= 3).toBeTruthy();
    const email = inviteDialog.email;
    email.value = 'adxc@gmail.com';
    const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    expect(reg.test(email.value)).toBeTruthy();
    const confirmEmail = inviteDialog.confirmEmail;
    confirmEmail.value = 'adxc@gmail.com'
    expect(email.value).toEqual(confirmEmail.value);
  });

  it('Validate the result from invite response', async ()=> {
    const res= await reqApi.invite({name:'aaa', email:'lan@gmail.com'});
    expect(res).toEqual('Registered');
  })
})