import React, {Component} from 'react';
//import App from '../App';

class LectureGoalList extends Component{

  render() {
    return (
      <div className="LectureGoalList" style={{backgroundColor:'skyblue'}}>
        <h2>강의목표</h2>
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
export default LectureGoalList;
