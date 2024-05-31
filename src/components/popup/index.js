import styled from "styled-components";
import CloseBtn from "../../svgs/closeBtn";
import { useState } from "react";

const StyleCss = styled.div`
    .popup {
        position: fixed;
        z-index: 50;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .popupBackground {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5)
        }

        .popupInner {
            position: relative;
            background-color: #fff;
            width: 300px;
            min-height: 100px;
            padding: 15px;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .close {
                position: absolute;
                top: 15px;
                right: 15px;
                &:hover {
                    opacity: 0.8;
                }
            }

            .popupText {
                text-align: center;
                width: 80%;
                margin: auto;
            }

            .btnArea {
                button {
                    position: relative;
                    width: 100%;
                    cursor: pointer;
                    padding: 10px 0;
                    font-size: 14px;
                    font-weight: 200;
                    border-radius: 5px;
                    transition: all 0.25s;

                    &.confirmBtn {
                        color: #fff;
                        background-color: #49494B;
                        &:hover {
                            background-color: #131314;
                        }
                    }
                }
            }
        }
    }

`;

const Popup = (props) => {
    return (
        <StyleCss>
            <div className="popup">
                <div className="popupBackground" onClick={()=>{ props.setPopShow(false); props.setPopText('');}}></div>

                <div className="popupInner">
                    <button type="button" className="close" onClick={()=>{ props.setPopShow(false); props.setPopText('');}}><CloseBtn/></button>
                    <p className="popupText">{props.popText}</p>
                    <div className="btnArea">
                        <button type="button" className="confirmBtn" onClick={()=>{ props.setPopShow(false); props.setPopText('');}}>확인</button>
                    </div>
                </div>
            </div>
        </StyleCss>
    )
}

export default Popup;