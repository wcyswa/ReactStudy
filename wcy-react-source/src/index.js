import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './wcy-react/react-dom'
import './index.css';
import App from './App';

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
    <div className='border'>
        <h1>标签</h1>
        <a href="https://www.kaikeba.com/">kkb</a>
        <FunctionComponent name={'函数组件'}/>
        <Cat/>
    </div>
)

ReactDOM.render(
    jsx,
  document.getElementById('root')
);
