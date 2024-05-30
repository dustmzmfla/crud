import { useState } from "react";
import styled from "styled-components";
import DeleteBtn from "../../../svgs/deleteBtn";

const StyleCss = styled.div`
    position: relative;
    width: 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #eee;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: -10px;
        right: 30%;
        background-color: #e2eeff;
        border-radius: 50%;
        cursor: default;
    }

    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: -10px;
        right: 30%;
        background-color: #e2eeff;
        border-radius: 50%;
        cursor: default;
    }

    .content {
        height: 150px;
        display: flex;

        .icon {
            position: absolute;
            top: 0;
            right: 0;
            &:hover {
                opacity: 0.8;
            }
        }

        .side01 {
            width: 70%;
            border-right: 1px dashed #ddd;
            padding-right: 15px;
            .imgBox {
                position: relative;
                width: 100%;
                height: 100%;
                background-color: #eee;
                border-radius :7px;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius :7px;
                    filter: brightness(0.8)
                }

                .destination {
                    position: absolute;
                    left: 15px;
                    bottom: 15px;
                    font-size: 24px;
                    font-weight: 700;
                    font-style: italic;
                    color: #fff;
                }
            }
        }

        .side02 {
            position: relative;
            width: 30%;
            padding-left: 12px;
            display: flex;
            flex-direction: column;
            gap: 12px;

            h3 {
                font-size: 24px;
                font-weight: 500;
            }

            h1 {
                font-size: 24px;
                font-weight: 700;
            }

            .period {
                p {
                    font-size: 14px;
                    font-weight: 400;
                }

                span {
                    font-size: 14px;
                    color: #9E9EA1;
                    font-weight: 300;
                }
            }
        }

        .edit {
            position: absolute;
            bottom: 15px;
            right: 15px;
            color: #9E9EA1;
            text-decoration: underline;
            text-underline-offset: 3px;

            &:hover {
                color: #000;
            }
        }
    }
`;

const MainContent = (props) => {

    const [ hover, setHover ] = useState(false);;

    // MainContents로 팝업 데이터 보내기
    function sendData(){
        props.setPopshow(!props.visible);
        props.setPopText('삭제 하시겠습니까?');
    }


    return(
        <StyleCss onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}}>
            <div className="content">
                <div className="side01">
                    <div className="imgBox">
                        <img src="images/destination/seoul.jpg" alt=""/>
                        <h5 className="destination">서울</h5>
                    </div>
                </div>
                <div className="side02">
                    { hover === true ? 
                        <div className="icon" onClick={()=>{ sendData(); }}>
                            <DeleteBtn/>
                        </div>
                    : false}
                    <h3 className="dday">D-5</h3>

                    <h1 className="title">서울여행</h1>

                    <div className="period">
                        <p>여행기간</p>
                        <span>0000.00.00 ~ 0000.00.00</span>
                    </div>

                </div>
                <button className="edit">수정하기</button>
            </div>
        </StyleCss>
    )
}

export default MainContent;