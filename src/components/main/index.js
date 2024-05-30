import styled from "styled-components";
import Header from "../header";
import MainHeader from "../../pages/main/mainHeader";
import MainContents from "./mainContents";
import {  useState } from "react";

let StyleCss = styled.div`
    .main {
        width: 720px;
        margin: auto;
        min-height: 100vh;
        height: auto;
        background: #e2eeff;
        border-left: 2px solid #eee;
        border-right: 2px solid #eee;
    }

    @media screen and (max-width: 720px) {
        .main {
            width: 100%;
            border: 0;
        }
    }
`;

const Main = () => {

    // 정렬 방식
    const [ arr, setArr ] = useState(false);
    function send(arr){ setArr(arr); }

    return (

        // 메인 페이지

        <StyleCss>
            <div className="main">
                <Header/>
                <MainHeader send={send}/>
                <MainContents arr={arr}/>
            </div>
        </StyleCss>
    )
}

export default Main;