import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './wcy-react/react-dom'
import './index.css';
import App from './App';

const jsx = (
    <div className='border'>
        <h1>标签</h1>
        <a href="https://www.kaikeba.com/">kkb</a>
    </div>
)

ReactDOM.render(
    jsx,
  document.getElementById('root')
);
