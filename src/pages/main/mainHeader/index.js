import styled from "styled-components";
import PlusBtn from "../../../svgs/plusBtn";
import CheckIcon from "../../../svgs/checkIcon";
import ShowPage from "../../../svgs/showPage";
import { useState } from "react";
import Tooltip from "../../event/tooltip";
import PaperIcon from "../../../svgs/paperIcon";
import { Link } from "react-router-dom";

const StyleCss = styled.div`
    .mainHeader {
        display: flex;
        gap: 15px;
        justify-content: right;
        align-items: center;
        padding: 15px;
        height: 30px;

        button{
            display: flex;
            justify-content: center;

            & > div:first-child {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;

                svg {
                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 720px) {
        .mainHeader {
            button {
                &:last-child {
                    .tooltip {
                        right: -15px;
                        &::before {
                            left: 65%;
                        }
                    }
                }
            }
        }
    }
`;

const MainHeader = (props) => {

    const [ toolTip, setToolTip ] = useState(false);
    const [ ttext, setTtext ] = useState('');
    const [ toolLoca, setToolLoca ] = useState('');

    // 정렬방식 클릭 시 아이콘 변경
    const [ arrChange, setArrChange ] = useState(false);

    // 정렬방식 변경 값 넘기기
    function sendArr (){ props.send(!arrChange); }

    return (
        
        // 메인 페이지 아이콘 관련 페이지

        <StyleCss>
            <div className="mainHeader">
                <Link to={'/schedule'}>
                    <button type="button" className="addBtn" onMouseEnter={()=>{setToolTip(true); setTtext('일정추가'); setToolLoca('tooltip1'); }} onMouseLeave={()=>{ setToolTip(false); setTtext(''); setToolLoca('');}} >
                        <PlusBtn/>
                        { toolTip === true && toolLoca === 'tooltip1' ? <Tooltip text={ttext}/> : false }
                    </button>
                </Link>

                <button type="button" className="addBtn" onMouseEnter={()=>{setToolTip(true); setTtext('다중선택'); setToolLoca('tooltip2'); }} onMouseLeave={()=>{ setToolTip(false); setTtext(''); setToolLoca('');}} >
                    <CheckIcon width={'18'} height={'14'}/>
                    { toolTip === true && toolLoca === 'tooltip2' ? <Tooltip text={ttext}/> : false }
                </button>

                <button type="button" className="addBtn" onMouseEnter={()=>{setToolTip(true); setTtext('정렬방식'); setToolLoca('tooltip3'); }} onMouseLeave={()=>{ setToolTip(false); setTtext(''); setToolLoca('');}} onClick={()=>{ setArrChange(!arrChange); sendArr(); }} >
                    { arrChange === false ? <ShowPage/> : <PaperIcon/> }
                    { toolTip === true && toolLoca === 'tooltip3' ? <Tooltip text={ttext}/> : false }
                </button>
            </div>
        </StyleCss>
    );
}

export default MainHeader;