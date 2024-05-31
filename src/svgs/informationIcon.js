import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
    }
`;

const InformationIcon = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '20' : props.width} height={props.height === undefined ? '20' : props.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 13.4V10" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6.59998H10.008" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default InformationIcon;