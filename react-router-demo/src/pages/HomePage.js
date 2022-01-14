import React, {Component} from "react";
import Redirect from "../wcy-react-router-dom/Redirect";

export default class HomePage extends Component {
  render() {
    return <Redirect to={'/welcome'}/>
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}
