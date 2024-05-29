import styled from "styled-components";

const StyleCss = styled.div`
    h5 { 
        font-weight: 400;
        margin: 0;
        font-size: 18px;
    }
`;

const HeaderText = (props) => {
    return (
        <StyleCss>
            <h5>{props.title}</h5>
        </StyleCss>
    );
}

export default HeaderText;