import styled from "styled-components";

const SvgStyle = styled.div`
    svg {
        position: relative;
        cursor: pointer;
    }
`;

const ShowPage = (props) => {
    return (
        <SvgStyle>
            <svg width={props.width === undefined ? '18' : props.width} height={props.height === undefined ? '20' : props.height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1538 19H2.84615C1.82655 19 1 18.0357 1 16.8462V7.15385C1 5.96431 1.82655 5 2.84615 5H11.1538C12.1734 5 13 5.96431 13 7.15385V16.8462C13 18.0357 12.1734 19 11.1538 19Z" stroke={props.color === undefined ? '#000' : props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.2051 15H15.1538C15.6435 15 16.1131 14.7731 16.4593 14.3692C16.8055 13.9652 17 13.4174 17 12.8462V3.15385C17 2.58261 16.8055 2.03477 16.4593 1.63085C16.1131 1.22692 15.6435 1 15.1538 1H6.84615C6.35652 1 5.88695 1.22692 5.54073 1.63085C5.19451 2.03477 5 2.58261 5 3.15385V4.23077" stroke="#2C2C2D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </SvgStyle>
    )
}

export default ShowPage;