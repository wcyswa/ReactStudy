import {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

@connect(({user})=>({isLogin:user.isLogin, loading: user.loading, err: user.err}))
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }
  login(name){

  }
  render() {
    const {isLogin, loading, location, err} = this.props;
    if(isLogin){ // 登录成功，重定向到来的页面，或者默认首页
      const {redirect='/'} = location.state || {};
      return <Redirect to={redirect}/>
    }
    const {name} = this.state;
    return (
      <div>
        <h3>LoginPage</h3>
        <button onClick={this.login.bind(this, name)}>{loading ? '登录中':'登录'}</button>
        <p>{err.msg}</p>
      </div>
    );
  }
}
export default LoginPage;
