import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LectureGoalList from './components/LectureGoalList';

/*const FunctionalComponent = () => (
  <div>
    <h1>안녕? 이것은 함수형 컴포넌트야!</h1>
    <h2>현재 시간은? {new Date().toLocaleString()}. </h2>
  </div>
);

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>안녕? This is a stateless component! </h1>
        <h2>now: {new Date().toLocaleString()}. </h2>
      </div>
    );
  }
}

class StatefullComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleString(),
    };

    var that = this;

    setTimeout(function() {
      console.log(this);
      that.setState({
        now: new Date().toLocaleTimeString(),
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>안녕? 이것은 상태가 있는 컴포넌트야!</h1>
        <h2>현재 시간은? {this.state.now}. </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <FunctionalComponent />
    <StatelessComponent />
    <StatefullComponent />
  </div>,
  document.getElementById('root')
);*/
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//0128
//ReactDOM.render(<App />, document.getElementById('root'));
/*
const myElem = <p>이렇게 써도 되나?</p>;

const myCom = () => <p>이렇게 써도 되는거냐?</p>;

class MyKlassCom extends React.Component {
  render() {
    return <p>클래스형 컴포넌트</p>;
  }
}*/
//각각이 어떻게 다른지 확인해보자.
//console.log(myElem, myCom(), <myCom />);
/*
console.log(myKlassCom);
console.log(<myKlassCom />);*/
/*

const MyElem = <p>HTML 태그를 쓴 컴포넌트 </p>;
const MyCom = () => <p>HTML 태그를 쓴 컴포넌트 </p>;

console.log(MyElem, MyCom());
*/

/*function tick() {
  const element = (
    <div>
      <h1>hello, world!</h1>
      <h2>It is {new Date().toLocaleString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
const nTimer = setInterval(tick, 1000);

const nTimer2 = setTimeout(function() {
  clearInterval(nTimer);
}, 5000);
console.log(nTimer, nTimer2);*/
ReactDOM.render(<LectureGoalList />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
