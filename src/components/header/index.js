import styled from "styled-components";
import BackBtn from "../../svgs/backBtn";
import HeaderText from "../../pages/header/headerText";
import HomeBtn from "../../svgs/homeBtn";
import { useState } from "react";

const HeaderCss = styled.div`
    .header {
        height: 50px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
    }
`;

const Header = () => {
    const [ title, setTitle ] = useState('메인화면');

    return(
        <HeaderCss>
            <div className="header">
                <BackBtn/>
                <HeaderText title={title}/>
                <HomeBtn/>
            </div>
        </HeaderCss>
    )
}

export default Header;