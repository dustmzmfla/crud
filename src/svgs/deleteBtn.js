import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
        cursor: pointer;
    }
`;

const DeleteBtn = (props) => {
    return(
        <SvgStyle>
            <svg width={props.width === undefined ? '17' : props.width} height={props.height === undefined ? '18' : props.height} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.19995H2.6H15.4" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.8 4.2V15.4C13.8 15.8243 13.6314 16.2313 13.3313 16.5314C13.0313 16.8314 12.6243 17 12.2 17H4.19998C3.77563 17 3.36866 16.8314 3.0686 16.5314C2.76855 16.2313 2.59998 15.8243 2.59998 15.4V4.2M4.99998 4.2V2.6C4.99998 2.17565 5.16855 1.76869 5.46861 1.46863C5.76866 1.16857 6.17563 1 6.59998 1H9.79998C10.2243 1 10.6313 1.16857 10.9313 1.46863C11.2314 1.76869 11.4 2.17565 11.4 2.6V4.2" stroke="#2C2C2D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default DeleteBtn;