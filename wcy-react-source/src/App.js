import {Component} from "react";

class Cat extends Component{

  render() {
    return(
        <div>类组件</div>
    )
  }
}

function FunctionComponent(props) {
  return (
      <div className="border">
        <p>{props.name}</p>
      </div>
  );
}

const jsx = (
    <div className="border">
      <h1>全栈</h1>
      <a href="https://www.kaikeba.com/">kkb</a>
      <FunctionComponent name="function" />
      <Cat/>
      <>
        <h1>omg</h1>
        <h2>omg</h2>
      </>
    </div>
);

function App() {
  console.log(jsx, 'jsx')
  return (
      jsx
  );
}

export default App;
