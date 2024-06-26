import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
        cursor: pointer;
    }
`;

const CheckIcon = (props) => {
    
    
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '11' : props.width} height={props.height === undefined ? '8' : props.height} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L6.64912 9L1 3.58824" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default CheckIcon;