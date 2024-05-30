import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
        cursor: pointer;
    }
`;

const CloseBtn = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '14' : props.width} height={props.height === undefined ? '14' : props.height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7.00002 7.00003M7.00002 7.00003L13 1M7.00002 7.00003L1 1M7.00002 7.00003L13 13" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default CloseBtn;