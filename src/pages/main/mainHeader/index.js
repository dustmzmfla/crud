import styled from "styled-components";
import PlusBtn from "../../../svgs/plusBtn";
import CheckIcon from "../../../svgs/checkIcon";

const StyleCss = styled.div`
    .mainHeader {
        display: flex;
        gap: 12px;
        justify-content: right;
        align-items: center;
        padding: 0 30px;
        height: 30px;
    }
`;

const MainHeader = () => {
    return (
        <StyleCss>
            <div className="mainHeader">
                <PlusBtn/>
                <CheckIcon width={'18'} height={'14'} color={'red'}/>
            </div>
        </StyleCss>
    );
}

export default MainHeader;