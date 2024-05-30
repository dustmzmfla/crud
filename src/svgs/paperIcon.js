import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
        cursor: pointer;
    }
`;

const PaperIcon = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '14' : props.width} height={props.height === undefined ? '16' : props.height} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1538 15H2.84615C1.82655 15 1 14.0357 1 12.8462V3.15385C1 1.96431 1.82655 0.999999 2.84615 0.999999H11.1538C12.1734 0.999999 13 1.96431 13 3.15385V12.8462C13 14.0357 12.1734 15 11.1538 15Z" stroke="#2C2C2D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </SvgStyle>
    )
}

export default PaperIcon;