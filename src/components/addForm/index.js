import { useEffect } from "react";
import styled from "styled-components";

const StyleCss = styled.div`

`;

const AddForm = (props) => {

    // 헤더 타이틀 변경
    useEffect(()=>{ props.headerTitle('일정추가'); })

    return (
        <StyleCss>
            <form method="post">
                <div className="formContents">
                    <label>여행지</label>
                    <input type="text" placeholder="여행지 입력"></input>
                </div>

                <div className="formContents">
                    <label>여행제목</label>
                    <input type="text" placeholder="미입력시 여행지+여행으로 고정"></input>
                </div>

                <div className="formContents">
                    <label>여행기간</label>

                    
                </div>
            </form>
        </StyleCss>
    )
}

export default AddForm;