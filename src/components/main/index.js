import styled from "styled-components";
import Header from "../header";
import MainHeader from "../../pages/main/mainHeader";

let StyleCss = styled.div`
    .main {
        width: 720px;
        margin: auto;
        height: 100vh;
        background: #e2eeff;
        border-left: 2px solid #eee;
        border-right: 2px solid #eee;

        p {
            margin: 0;
        }
    }
`;

const Main = () => {
    return (
        <StyleCss>
            <div className="main">
                <Header/>
                <MainHeader/>
            </div>
        </StyleCss>
    )
}

export default Main;