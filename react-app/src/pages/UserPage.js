import {Component} from "react";
import {connect} from 'react-redux'
class UserPage extends Component {
  render() {
    console.log(this.props.user, '用户名')
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}
export default connect(({user})=>({user}))(UserPage);
