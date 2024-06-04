import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
        cursor: pointer;
    }
`;

const UploadBtn = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '16' : props.width} height={props.height === undefined ? '18' : props.height} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 16.5H1" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 1V12.5M8 12.5L4.5 9M8 12.5L11.5 9" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default UploadBtn;