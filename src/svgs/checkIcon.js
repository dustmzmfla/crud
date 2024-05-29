import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        width: 11px;
        height: 8px;
        stroke: #000;
        cursor: pointer;
    }
`;

const CheckIcon = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width} height={props.height} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L6.64912 9L1 3.58824" stroke={props.color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default CheckIcon;