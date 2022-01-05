import {Component} from "react";
import {Redirect} from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }
  render() {
    return (
      <div>
        <h3>LoginPage</h3>
      </div>
    );
  }
}
export default LoginPage;
