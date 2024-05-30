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
        padding-bottom: 50px;
        box-sizing: border-box;
        gap: 30px 12px;
        flex-wrap: wrap;

        &.arrChange {
            & > div {
                width: calc(50% - 38px);
                height: 320px;
                &::before {
                    left: -10px;
                    bottom: 41.5%;
                    top: unset;
                    right: unset;
                }

                &::after {
                    right: -10px;
                    bottom: 41.5%;
                    top: unset;
                    left: unset;
                }
            }

            .content {
                width: 100%;
                heigth: 100%;
                flex-direction: column;

                .side01 {
                    width: 100%;
                    heigth: 70%;
                    padding-right: 0;
                    border-right: 0;
                }

                .side02 {
                    width: 100%;
                    height: 30%;
                    padding-top: 15px;
                    margin-top: 15px;
                    padding-left: 0;
                    border-top: 1px dashed #ddd;
                    gap: 6px;

                    .icon {
                        top: 15px;
                    }
                }
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