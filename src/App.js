import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //debugger;
    return (
      <div className="App">
        <h2> 강의 목표 </h2>
        {/*        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>*/}
        <ul>
          <li>
            <input type="checkbox" />
            <label>React 개발에 필요한 환경을 구축한다.</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8 </label>
          </li>
          <li>
            <input type="checkbox" />
            <label>개발 편의를 위한 VSCode IDE를 익힌다. </label>
          </li>
          <li>
            <input type="checkbox" />
            <label>기본적인 Git 사용법을 익힌다. </label>
          </li>
          <li>
            <input type="checkbox" />
            <label>PR 코드 리뷰를 응용한 개발 프로세스를 익힌다. </label>
          </li>
          <li>
            <input type="checkbox" />
            <label>React로 간단한 노트 앱을 만들어본다. </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
