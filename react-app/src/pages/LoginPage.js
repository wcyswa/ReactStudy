import {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {LOGIN_SUCCESS} from "../action/const";
import {login} from "../action/user";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }
  login(name){
    const {dispatch} = this.props;
    dispatch({type:LOGIN_SUCCESS, payload: {userInfo: name}})
  }
  render() {
    const {isLogin, loading, location, err, login} = this.props;
    if(isLogin){ // 登录成功，重定向到来的页面，或者默认首页
      const {redirect='/'} = location.state || {};
      return <Redirect to={redirect}/>
    }
    const {name} = this.state;
    return (
      <div>
        <h3>LoginPage</h3>
        <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => this.setState({name: e.target.value})}
        />
        {/*执行当前页面的login， 内部使用dispatch*/}
        {/*<button onClick={this.login.bind(this, name)}>{loading ? '登录中':'登录'}</button>*/}

        {/*使用mapDispatchToProps 关联dispatch到组件props*/}
          <button onClick={() => login({name})}>
              {loading ? "loading" : "login"}
          </button>
        <p>{err.msg}</p>
      </div>
    );
  }
}
export default connect(({user})=>({isLogin:user.isLogin, loading: user.loading, err: user.err}), {login})(LoginPage);
