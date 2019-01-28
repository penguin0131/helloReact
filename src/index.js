import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const myElem = <p>이렇게 써도 되나?</p>;

const myCom = () => <p>이렇게 써도 되는거냐?</p>;

class MyKlassCom extends React.Component {
  render() {
    return <p>클래스형 컴포넌트</p>;
  }
}
//각각이 어떻게 다른지 확인해보자.
//console.log(myElem, myCom(), <myCom />);

console.log(myKlassCom);
console.log(<myKlassCom />);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
