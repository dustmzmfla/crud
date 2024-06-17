import styled from "styled-components";
import MainHeader from "../../pages/main/mainHeader";
import MainContents from "./mainContents";
import {  useEffect, useState } from "react";


let StyleCss = styled.div`
    
`;

const Main = (props) => {

    // 정렬 방식
    const [ arr, setArr ] = useState(false);
    function send(arr){ setArr(arr); }

    // 팝업
    const [ popShow, setPopShow ] = useState(false);
    const [ popText, setPopText ] = useState('');

    // 헤더 타이틀 변경
    useEffect(()=>{ props.headerTitle('메인화면'); })

    return (

        // 메인 페이지

        <StyleCss>
            <div className="main">
                <MainHeader send={send}/>
                <MainContents arr={arr} popShow={popShow} setPopShow={setPopShow} popText={popText} setPopText={setPopText}/>
                {/* { popShow === true ? <Popup popText={popText} setPopText={setPopText} popShow={popShow} setPopShow={setPopShow}/> : false } */}
            </div>
        </StyleCss>
    )
}

export default Main;