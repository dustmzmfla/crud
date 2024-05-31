import { useEffect } from "react";
import styled from "styled-components";

const StyleCss = styled.div`

`;

const AddForm = (props) => {
    // 헤더 타이틀 변경
    useEffect(()=>{ props.headerTitle('일정추가'); })

    return (
        <StyleCss></StyleCss>
    )
}

export default AddForm;