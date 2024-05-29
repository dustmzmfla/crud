import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        cursor: pointer;
    }
`;

const PlusBtn = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '20' : props.width} height={props.height === undefined ? '20' : props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H8M8 8H15M8 8V1M8 8V15" stroke={props.color === undefined ? '#000' : props.color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default PlusBtn;