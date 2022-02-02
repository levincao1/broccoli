/*
 * @Author: levin
 * @Date: 2022-02-02 12:08:06
 * @LastEditTime: 2022-02-02 17:28:19
 * @LastEditors: Please set LastEditors
 * @Description: Home page
 * @FilePath: /broccoli/src/pages/Home/index.js
 */
import { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as authActions, getShowInvite, getLoggedUser } from "../../redux/modules/app";
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    handleShowInvite = e => {
        e.preventDefault();
        if (this.props.isInvite) {
            return;
        }
        this.props.showInvite(true);
    }

    render() {
        return (
            <div className="page-home">
                <h1 className="txt-title"> A better way <br /> to enjoy every day.</h1>
                <p className="txt-desc"> Be the first to know when we launch.</p>
                <button className="btn-invite" onClick={this.handleShowInvite}>Request an invite</button>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        isInvite: getShowInvite(state)
    };
}
const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(authActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);