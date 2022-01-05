import {Component} from "react";

class UserPage extends Component {
  render() {
    console.log("UserPage", this.props.user); //sy-log
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}
export default UserPage;
