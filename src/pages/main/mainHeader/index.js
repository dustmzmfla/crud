import styled from "styled-components";
import PlusBtn from "../../../svgs/plusBtn";
import CheckIcon from "../../../svgs/checkIcon";

const StyleCss = styled.div`
`;

const MainHeader = () => {
    return (
        <StyleCss>
            <div className="mainHeader">
                <PlusBtn/>
                <CheckIcon width={'16px'} height={'10px'} color={'red'}/>
            </div>
        </StyleCss>
    );
}

export default MainHeader;