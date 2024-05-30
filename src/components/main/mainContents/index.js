import styled from "styled-components";
import MainContent from "../../../pages/main/mainContents";

let StyleCss = styled.div`
    .contents {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        padding: 15px;
        padding-top: 0;
        box-sizing: border-box;
        gap: 12px;
        flex-wrap: wrap;

        &.arrChange {
            & > div {
                width: calc(50% - 38px);
            }
        }
    }
`;

const MainContents = (props) => {
    return (
        <StyleCss>
            <div className={ props.arr === true ? 'contents arrChange' : 'contents' }>
                <MainContent/>
                <MainContent/>
                <MainContent/>
            </div>
        </StyleCss>
    )
}

export default MainContents;