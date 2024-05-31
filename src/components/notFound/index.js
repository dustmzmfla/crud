import styled from "styled-components";
import InformationIcon from "../../svgs/informationIcon";
import { useNavigate } from "react-router-dom";

const StyleCss = styled.div`
    .notFound {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .notice {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 15px;

            P {
                font-size: 24px;
            }
        }
    }
`;

const NotFound = () => {

    const navigate = useNavigate();

    setTimeout(()=>{
        navigate('/');
    }, 3000)

    return(
        <StyleCss>
            <div className="notFound">
                <div className="notice">
                    <InformationIcon width={'50'} height={'50'}/>
                    <p>페이지를 찾을 수 없습니다</p>
                </div>
            </div>
        </StyleCss>
    )
}

export default NotFound;