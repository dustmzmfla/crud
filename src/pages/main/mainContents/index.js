import styled from "styled-components";

const StyleCss = styled.div`
    position: relative;
    width: 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #eee;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: -10px;
        right: 30%;
        background-color: #e2eeff;
        border-radius: 50%;
        cursor: default;
    }

    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: -10px;
        right: 30%;
        background-color: #e2eeff;
        border-radius: 50%;
        cursor: default;
    }

    .content {
        height: 100px;
    }
`;

const MainContent = () => {
    return(
        <StyleCss>
            <div className="content">더미데이터</div>
        </StyleCss>
    )
}

export default MainContent;