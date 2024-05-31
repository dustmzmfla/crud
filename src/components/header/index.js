import styled from "styled-components";
import BackBtn from "../../svgs/backBtn";
import HeaderText from "../../pages/header/headerText";
import HomeBtn from "../../svgs/homeBtn";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderCss = styled.div`
    position: sticky;
    top: 0;
    z-index: 20;

    .header {
        height: 50px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        border-bottom: 2px solid #eee;
    }
`;

const Header = (props) => {
    
    return(
        <HeaderCss>
            <div className="header">
                <Link to={'..'}><BackBtn/></Link>
                <HeaderText title={props.title}/>
                <Link to="/"><HomeBtn/></Link>
            </div>
        </HeaderCss>
    )
}

export default Header;