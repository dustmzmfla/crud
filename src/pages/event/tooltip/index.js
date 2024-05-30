import styled from "styled-components";

const StyleCss = styled.div`
        position: absolute;
        padding: 12px;
        background-color : #fff;
        z-index: 10;
        max-width: 80px;
        border-radius: 5px;
        top: 35px;
        font-size: 13px;
        font-weight: 300;
        word-break: keep-all;
        word-wrap: break-word;
        box-shadow : 1px 1px 2px 2px rgba(0, 0, 0, 0.15);

        &::before {
            content: '';
            width: 6px;
            height: 6px;
            background-color: #fff;
            position: absolute;
            top: -3px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
        }
`;

const Tooltip = (props) => {
    return(
        <StyleCss className="tooltip">{props.text}</StyleCss>
    )
}

export default Tooltip;