import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        cursor: pointer;
    }
`;

const HomeBtn = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '18' : props.height} height={props.height === undefined ? '20' : props.height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.27071C1 7.65776 1.28107 7.07866 1.76262 6.69943L7.76262 1.97443C8.48851 1.4028 9.51149 1.4028 10.2374 1.97443L16.2374 6.69943C16.7189 7.07866 17 7.65776 17 8.27071V17.2C17 17.6774 16.8127 18.1352 16.4793 18.4728C16.1459 18.8104 15.6937 19 15.2222 19H2.77778C2.30628 19 1.8541 18.8104 1.5207 18.4728C1.1873 18.1352 1 17.6774 1 17.2V8.27071Z" stroke="#2C2C2D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 18.8887V12.8887C6 11.7841 6.89543 10.8887 8 10.8887H10C11.1046 10.8887 12 11.7841 12 12.8887V18.8887" stroke={props.color === undefined ? '#000' : props.color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default HomeBtn;