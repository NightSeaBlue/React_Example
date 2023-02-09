import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { useState } from "react";

function App() {
    // 정적변수
    let title = "우리동네";
    // 변경 데이터 변수
    // let [변수명, setter] =useState(초기값);
    let [subTitle, setSubTitle] = useState("우리카페");

    return (
        <div className="App">
            <div>{title}</div>
            <div>{subTitle}</div>
            <hr />
            <button onClick={() => (title = "누구세요")}> 제목변경 </button>
            <button onClick={() => (subTitle = "남의 카페")}> 카페명변경 </button>
            <button onClick={() => setSubTitle("남의 카페")}> 카페명변경 </button>
        </div>
    );
}

export default App;
