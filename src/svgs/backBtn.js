import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        width: 16px;
        height: 14px;
        stroke: #000;
        cursor: pointer;
    }
`;

const BackBtn = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width} height={props.height} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.72H1M1 6.72L6.72 1M1 6.72L6.72 12.44" stroke={props.color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default BackBtn;